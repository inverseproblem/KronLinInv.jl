
# Contents

```@contents
Pages = ["index.md","publicapi.md"]
Depth = 2
``` 

# User guide

 This document describes the Julia version of the code KronLinInv.
 
 If you use this code for research or else, please cite the related paper: 

Andrea Zunino, Klaus Mosegaard (2018), **An efficient method to solve large linearizable inverse problems under Gaussian and separability assumptions**, *Computers & Geosciences*. ISSN 0098-3004, <https://doi.org/10.1016/j.cageo.2018.09.005>.

See the above mentioned paper for a detailed description.

## Theoretical background

KronLinInv solves the *linear inverse problem* with Gaussian uncertainties
represented by the following objective function
```math
S( \mathbf{m}) = \frac{1}{2} ( \mathbf{G} \mathbf{m} - \mathbf{d}_{\sf{obs}} )^{\sf{T}} \mathbf{C}^{-1}_{\rm{D}} ( \mathbf{G} \mathbf{m} - \mathbf{d}_{\sf{obs}} ) + \frac{1}{2} ( \mathbf{m} - \mathbf{m}_{\sf{prior}} )^{\sf{T}} \mathbf{C}^{-1}_{\rm{M}} ( \mathbf{m} - \mathbf{m}_{\sf{prior}} )
```
under the following separability conditions (for a 3-way decomposition):
```math
\mathbf{C}_{\rm{M}} = \mathbf{C}_{\rm{M}}^{\rm{x}} \otimes 
\mathbf{C}_{\rm{M}}^{\rm{y}} \otimes \mathbf{C}_{\rm{M}}^{\rm{z}} 
, \quad
\mathbf{C}_{\rm{D}} = \mathbf{C}_{\rm{D}}^{\rm{x}} \otimes 
\mathbf{C}_{\rm{D}}^{\rm{y}} \otimes \mathbf{C}_{\rm{D}}^{\rm{z}} 

\quad \textrm{ and } \quad

\mathbf{G} = \mathbf{G}^{\rm{x}} \otimes \mathbf{G}^{\rm{y}} \otimes \mathbf{G}^{\rm{z}} \, .
```

From the above, the posterior covariance matrix is given by 
```math 
 \mathbf{\widetilde{C}}_{\rm{M}} =  \left( \mathbf{G}^{\sf{T}} \,
\mathbf{C}^{-1}_{\rm{D}} \, \mathbf{G} + \mathbf{C}^{-1}_{\rm{M}} \right)^{-1}
```
  and the center of posterior gaussian is 
```math
 \mathbf{\widetilde{m}}  
 = \mathbf{m}_{\rm{prior}}+ \mathbf{\widetilde{C}}_{\rm{M}} \, \mathbf{G}^{\sf{T}} \, \mathbf{C}^{-1}_{\rm{D}} \left(\mathbf{d}_{\rm{obs}} - \mathbf{G} \mathbf{m}_{\rm{prior}} \right) \, .
```

The paper describes how to transform the previous problem in order to obtain what follows.

```math
 \mathbf{U}_1 \mathbf{\Lambda}_1  \mathbf{U}_1^{-1}  
 = \mathbf{C}_{\rm{M}}^{\rm{x}} (\mathbf{G}^{\rm{x}})^{\sf{T}}
(\mathbf{C}_{\rm{D}}^{\rm{x}})^{-1} \mathbf{G}^{\rm{x}}
```

```math
\mathbf{U}_2 \mathbf{\Lambda}_2  \mathbf{U}_2^{-1}
=  \mathbf{C}_{\rm{M}}^{\rm{y}} (\mathbf{G}^{\rm{y}})^{\sf{T}}
(\mathbf{C}_{\rm{D}}^{\rm{y}})^{-1} \mathbf{G}^{\rm{y}}
```

```math
\mathbf{U}_3 \mathbf{\Lambda}_3  \mathbf{U}_3^{-1}
= \mathbf{C}_{\rm{M}}^{\rm{z}} (\mathbf{G}^{\rm{z}})^{\sf{T}}
(\mathbf{C}_{\rm{D}}^{\rm{z}})^{-1} \mathbf{G}^{\rm{z}}  \, .
```

The posterior covariance is expressed as

```math 
\mathbf{\widetilde{C}}_{\rm{M}} = 
\left(  
\mathbf{U}_1 \otimes \mathbf{U}_2 \otimes \mathbf{U}_3 
\right)
 \big( 
\mathbf{I} + \mathbf{\Lambda}_1 \! \otimes \! \mathbf{\Lambda}_2 \! \otimes \! \mathbf{\Lambda}_3 
\big)^{-1} 
\big( 
\mathbf{U}_1^{-1}  \mathbf{C}_{\rm{M}}^{\rm{x}} \otimes 
\mathbf{U}_2^{-1} \mathbf{C}_{\rm{M}}^{\rm{y}} \otimes 
\mathbf{U}_3^{-1} \mathbf{C}_{\rm{M}}^{\rm{z}} 
\big) \, .
```
and the posterior mean model as
```math 
\mathbf{\widetilde{m}} =  
 \mathbf{m}_{\rm{prior}} +  
 \Big[ \!
 \left(  
\mathbf{U}_1 \otimes \mathbf{U}_2 \otimes \mathbf{U}_3 
\right)
 \big( 
\mathbf{I} + \mathbf{\Lambda}_1\!  \otimes \! \mathbf{\Lambda}_2 \!  \otimes\!  \mathbf{\Lambda}_3 
\big)^{-1} \\ 
\times \Big( 
\left( \mathbf{U}_1^{-1}  \mathbf{C}_{\rm{M}}^{\rm{x}} (\mathbf{G}^{\rm{x}})^{\sf{T}} (\mathbf{C}_{\rm{D}}^{\rm{x}})^{-1} \right) \!    \otimes 
\left( \mathbf{U}_2^{-1} \mathbf{C}_{\rm{M}}^{\rm{y}}  (\mathbf{G}^{\rm{y}})^{\sf{T}} (\mathbf{C}_{\rm{D}}^{\rm{y}})^{-1}  \right)   \!   
\\ 
\otimes  \left( \mathbf{U}_3^{-1} \mathbf{C}_{\rm{M}}^{\rm{z}} (\mathbf{G}^{\rm{z}})^{\sf{T}} (\mathbf{C}_{\rm{D}}^{\rm{z}})^{-1} \right)
\Big)
\Big] \\
\times \Big( \mathbf{d}_{\rm{obs}} - \big( \mathbf{G}^{\rm{x}} \otimes \mathbf{G}^{\rm{y}} \otimes \mathbf{G}^{\rm{z}} \big) \, \mathbf{m}_{\rm{prior}} \Big) \, .
```
These last two formulae are those used by the KronLinInv algorithm.

Several function are exported by the module KronLinInv:

- [`calcfactors()`](@ref): Computes the factors necessary to solve the inverse problem

- [`posteriormean()`](@ref): Computes the posterior mean model

- [`blockpostcov()`](@ref): Computes a block (or all) of the posterior covariance

- [`bandpostcov()`](@ref): NOT YET IMPLEMENTED! Computes a band of the posterior covariance



## Usage examples

### 2D example


```@example full

```


### 3D example


```@example full

```


```@meta
Author = "Andrea Zunino"
```

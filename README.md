# KronLinInv.jl

[![Build Status](https://travis-ci.com/inverseproblem/KronLinInv.jl.svg?branch=master)](https://travis-ci.com/inverseproblem/KronLinInv.jl)
[![CodeCov](https://codecov.io/gh/inverseproblem/KronLinInv.jl/branch/master/graph/badge.svg)](https://codecov.io/inverseproblem/KronLinInv.jl)
[![Docs Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://inverseproblem.github.io/KronLinInv.jl/stable)
[![Docs Latest](https://img.shields.io/badge/docs-latest-blue.svg)](https://inverseproblem.github.io/KronLinInv.jl/latest)

Docs: https://inverseproblem.github.io/KronLinInv.jl/stable

Kronecker-product-based linear inversion of geophysical (or other kinds of) data under Gaussian and separability assumptions. 
The code computes the posterior mean model and the posterior covariance matrix (or subsets of it) in an efficient manner (parallel algorithm) taking into account 3-D correlations both in the model parameters and in the observed data.

If you use this code for research or else, please cite the related paper:
 
Andrea Zunino, Klaus Mosegaard,
**An efficient method to solve large linearizable inverse problems under Gaussian and separability assumptions**,
Computers & Geosciences, 2018
ISSN 0098-3004, <https://doi.org/10.1016/j.cageo.2018.09.005>.


### Installation

To install the package simple enter into the package manager mode in Julia by typing "]" at the REPL prompt and then use `add`, namely:
```julia
(v1.2) pkg> add KronLinInv
```

### Authors
Andrea Zunino, 
Niels Bohr Institute

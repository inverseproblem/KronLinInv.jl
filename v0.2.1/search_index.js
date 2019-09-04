var documenterSearchIndex = {"docs":
[{"location":"#Manual-outline-1","page":"Home","title":"Manual outline","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"index.md\",\"publicapi.md\"]\nDepth = 2","category":"page"},{"location":"#User-guide-1","page":"Home","title":"User guide","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This document describes the Julia version of the code KronLinInv.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Kronecker-product-based linear inversion of geophysical (or other kinds of) data under Gaussian and separability assumptions. The code computes the posterior mean model and the posterior covariance matrix (or subsets of it) in an efficient manner (parallel algorithm) taking into account 3-D correlations both in the model parameters and in the observed data.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you use this code for research or else, please cite the related paper: ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Andrea Zunino, Klaus Mosegaard (2018), An efficient method to solve large linearizable inverse problems under Gaussian and separability assumptions, Computers & Geosciences. ISSN 0098-3004, https://doi.org/10.1016/j.cageo.2018.09.005.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"See the above mentioned paper for a detailed description.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"To install the package simple enter into the package manager mode in Julia by typing \"]\" at the REPL prompt and then use add, i.e.,","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(v1.2) pkg> add KronLinInv","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The package will be automatically downloaded from the web and installed.","category":"page"},{"location":"#Theoretical-background-1","page":"Home","title":"Theoretical background","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"KronLinInv solves the linear inverse problem with Gaussian uncertainties represented by the following objective function","category":"page"},{"location":"#","page":"Home","title":"Home","text":"S( mathbfm) = frac12 ( mathbfG mathbfm - mathbfd_sfobs )^sfT mathbfC^-1_rmD ( mathbfG mathbfm - mathbfd_sfobs ) + frac12 ( mathbfm - mathbfm_sfprior )^sfT mathbfC^-1_rmM ( mathbfm - mathbfm_sfprior )","category":"page"},{"location":"#","page":"Home","title":"Home","text":"under the following separability conditions (for a 3-way decomposition):","category":"page"},{"location":"#","page":"Home","title":"Home","text":"mathbfC_rmM = mathbfC_rmM^rmx otimes \nmathbfC_rmM^rmy otimes mathbfC_rmM^rmz \n quad\nmathbfC_rmD = mathbfC_rmD^rmx otimes \nmathbfC_rmD^rmy otimes mathbfC_rmD^rmz \n\nquad textrm and  quad\n\nmathbfG = mathbfG^rmx otimes mathbfG^rmy otimes mathbfG^rmz  ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"From the above, the posterior covariance matrix is given by ","category":"page"},{"location":"#","page":"Home","title":"Home","text":" mathbfwidetildeC_rmM =  left( mathbfG^sfT \nmathbfC^-1_rmD  mathbfG + mathbfC^-1_rmM right)^-1","category":"page"},{"location":"#","page":"Home","title":"Home","text":"and the center of posterior gaussian is ","category":"page"},{"location":"#","page":"Home","title":"Home","text":" mathbfwidetildem  \n = mathbfm_rmprior+ mathbfwidetildeC_rmM  mathbfG^sfT  mathbfC^-1_rmD left(mathbfd_rmobs - mathbfG mathbfm_rmprior right)  ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"KronLinInv solves the inverse problem in an efficient manner, with a very low memory imprint, suitable for large problems where many model parameters and observations are involved.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The paper describes how to obtain the solution to the above problem as shown hereafter. First the following matrices are computed","category":"page"},{"location":"#","page":"Home","title":"Home","text":" mathbfU_1 mathbfLambda_1  mathbfU_1^-1  \n = mathbfC_rmM^rmx (mathbfG^rmx)^sfT\n(mathbfC_rmD^rmx)^-1 mathbfG^rmx","category":"page"},{"location":"#","page":"Home","title":"Home","text":"mathbfU_2 mathbfLambda_2  mathbfU_2^-1\n=  mathbfC_rmM^rmy (mathbfG^rmy)^sfT\n(mathbfC_rmD^rmy)^-1 mathbfG^rmy","category":"page"},{"location":"#","page":"Home","title":"Home","text":"mathbfU_3 mathbfLambda_3  mathbfU_3^-1\n= mathbfC_rmM^rmz (mathbfG^rmz)^sfT\n(mathbfC_rmD^rmz)^-1 mathbfG^rmz   ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The posterior covariance is then expressed as","category":"page"},{"location":"#","page":"Home","title":"Home","text":"mathbfwidetildeC_rmM = \nleft(  \nmathbfU_1 otimes mathbfU_2 otimes mathbfU_3 \nright)\n big( \nmathbfI + mathbfLambda_1  otimes  mathbfLambda_2  otimes  mathbfLambda_3 \nbig)^-1 \nbig( \nmathbfU_1^-1  mathbfC_rmM^rmx otimes \nmathbfU_2^-1 mathbfC_rmM^rmy otimes \nmathbfU_3^-1 mathbfC_rmM^rmz \nbig)  ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"and the posterior mean model as","category":"page"},{"location":"#","page":"Home","title":"Home","text":"mathbfwidetildem =  \n mathbfm_rmprior +  \n Big \n left(  \nmathbfU_1 otimes mathbfU_2 otimes mathbfU_3 \nright)\n big( \nmathbfI + mathbfLambda_1  otimes  mathbfLambda_2   otimes  mathbfLambda_3 \nbig)^-1  \ntimes Big( \nleft( mathbfU_1^-1  mathbfC_rmM^rmx (mathbfG^rmx)^sfT (mathbfC_rmD^rmx)^-1 right)     otimes \nleft( mathbfU_2^-1 mathbfC_rmM^rmy  (mathbfG^rmy)^sfT (mathbfC_rmD^rmy)^-1  right)      \n \notimes  left( mathbfU_3^-1 mathbfC_rmM^rmz (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1 right)\nBig)\nBig \ntimes Big( mathbfd_rmobs - big( mathbfG^rmx otimes mathbfG^rmy otimes mathbfG^rmz big)  mathbfm_rmprior Big)  ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"These last two formulae are those used by the KronLinInv algorithm.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Several function are exported by the module KronLinInv:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"calcfactors(): Computes the factors necessary to solve the inverse problem\nposteriormean(): Computes the posterior mean model using the previously computed \"factors\" with calcfactors().\nblockpostcov(): Computes a block (or all) of the posterior covariance using the previously computed \"factors\" with calcfactors().\nbandpostcov(): NOT YET IMPLEMENTED! Computes a band of the posterior covariance the previously computed \"factors\" with calcfactors().","category":"page"},{"location":"#Usage-examples-1","page":"Home","title":"Usage examples","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The input needed is represented by the set of three covariance matrices of the model parameters, the three covariances of the observed data, the three forward model operators, the observed data (a vector) and the prior model (a vector). _The first thing to compute is always the set of \"factors\" using the function calcfactors().  Finally, the posterior mean (see posteriormean()) and/or covariance (or part of it) can be computed (see blockpostcov()).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"2D example\n3D example","category":"page"},{"location":"#twodexample-1","page":"Home","title":"2D example","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"An example of how to use the code for 2D problems is shown in the following. Notice that the code is written for a 3D problem, however, by setting some of the matrices as identity matrices with size of 1times1, a 2D problem can be solved without much overhead.","category":"page"},{"location":"#Creating-a-test-problem-1","page":"Home","title":"Creating a test problem","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"First, we create some input data to simulate a real problem. ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# set the sizes of the problem\nnx = 1\nny = 20\nnz = 30\nnxobs = 1\nnyobs = 18\nnzobs = 24\n\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"We then construct some covariance matrices and a forward operator. The \"first\" covariance matrices for model parameters (mathbfC_rmM^rmx    mathbfC_rmM^rmy   mathbfC_rmM^rmz) and observed data (mathbfC_rmD^rmx   mathbfC_rmD^rmy   mathbfC_rmD^rmz) are simply an identity matrix of shape 1times1, since it is a 2D problem. The forward relation (forward model) is created from three operators (mathbfG^rmx   mathbfG^rmy   mathbfG^rmz). Remark: the function mkCovSTAT used in the following example is not part of KronLinInv.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"function mkCovSTAT(sigma::Array{Float64,1},nx::Integer,ny::Integer,nz::Integer,\n                   corrlength::Array{Float64,1},kind::String) \n    function cgaussian(dist,corrlength)\n        if maximum(dist)==0.0\n            return 1.0\n        else\n            @assert(corrlength>0.0)\n            return exp.(-(dist./corrlength).^2)\n        end\n    end\n    function cexponential(dist,corrlength)\n        if maximum(dist)==0.0\n            return 1.0\n        else\n            @assert(corrlength>0.0)\n            return exp.(-(dist./corrlength))\n        end\n    end\n    \n    npts = nx*ny*nz\n    x = [float(i) for i=1:nx]\n    y = [float(i) for i=1:ny]\n    z = [float(i) for i=1:nz]\n    covmat_x = zeros(nx,nx)\n    covmat_y = zeros(ny,ny)\n    covmat_z = zeros(nz,nz)\n\n    if kind==\"gaussian\" \n        calccovfun = cgaussian\n    elseif kind==\"exponential\" \n        calccovfun = cexponential\n    else \n        println(\"Error, no or wrong cov 'kind' specified\")\n        exit()\n    end\n\n    for i=1:nx\n        covmat_x[i,:] .= sigma[1]^2 .* \n            calccovfun(sqrt.((x.-x[i]).^2),corrlength[1])\n    end\n    for i=1:ny\n        covmat_y[i,:] .= sigma[2]^2 .* \n            calccovfun(sqrt.(((y.-y[i])).^2),corrlength[2])\n    end\n    for i=1:nz\n        covmat_z[i,:] .= sigma[3]^2 .* \n            calccovfun(sqrt.(((z.-z[i])).^2),corrlength[3])\n    end\n    \n    return covmat_x,covmat_y,covmat_z\n end\n nothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# standard deviations\nsigmaobs  = [1.0, 0.1, 0.1] # notice the 1.0 as first element (2D problem)\nsigmam    = [1.0, 0.8, 0.8] # notice the 1.0 as first element (2D problem)\n# correlation lengths\ncorlenobs = [0.0, 1.4, 1.4] # notice the 0.0 as first element (2D problem)\ncorlenm   = [0.0, 2.5, 2.5] # notice the 0.0 as first element (2D problem)\n# create the covariance matrices on observed data\nCd1,Cd2,Cd3 = mkCovSTAT(sigmaobs,nxobs,nyobs,nzobs,corlenobs,\"gaussian\")\n# create the covariance matrices on model parameters\nCm1,Cm2,Cm3 = mkCovSTAT(sigmam,nx,ny,nz,corlenm,\"gaussian\") \n\n# forward model operator\nG1 = rand(nxobs,nx) # notice that nx=1 and nxobs=1 (2D problem)\nG2 = rand(nyobs,ny)\nG3 = rand(nzobs,nz)\n\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Finally, a \"true/reference\" model, in order to compute some synthetic \"observed\" data and a prior model.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# create a reference model\nrefmod = rand(nx*ny*nz)\n\n# create a prior model\nmprior = copy(refmod) .+ 0.3*randn(length(refmod)) \n\n# create some \"observed\" data\ndobs = kron(G1,kron(G2,G3)) * refmod \n# add some noise to make it more realistic\ndobs = dobs .+ 0.02.*randn(length(dobs)) \n\n#nothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Now we have create a synthetic example to play with, which we can solve as shown in the following.","category":"page"},{"location":"#Solving-the-2D-problem-1","page":"Home","title":"Solving the 2D problem","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"In order to solve the inverse problem using KronLinInv, we first need to compute the \"factors\" using the function calcfactors(), which takes as inputs two structs containing the covariance matrices and the forward operators.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using KronLinInv\n\n# create the covariance matrix structure\nCovs = CovMats(Cd1,Cd2,Cd3,Cm1,Cm2,Cm3)\n\n# forward model operator\nGfwd = FwdOps(G1,G2,G3)\n\n# calculate the required factors\nklifac = calcfactors(Gfwd,Covs)\n\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Now the inverse problem can be solved. We first compute the posterior mean and then a subset of the posterior covariance.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# calculate the posterior mean model\npostm = posteriormean(klifac,Gfwd,mprior,dobs)\n\n# calculate the posterior covariance\nnpts = nx*ny*nz\nastart, aend = 1,div(npts,3) # set of rows to be computed\nbstart, bend = 1,div(npts,3) # set of columns to be computed\n\n# compute the block of posterior covariance\npostC = blockpostcov(klifac,astart,aend,bstart,bend)\n\nnothing # hide","category":"page"},{"location":"#threedexample-1","page":"Home","title":"3D example","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"An example of how to use the code for 3D problems is shown in the following. It follows closely the 3D example.","category":"page"},{"location":"#Creating-a-test-problem-2","page":"Home","title":"Creating a test problem","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"First, we create some input data to simulate a real problem. ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# set the sizes of the problem\nnx = 7\nny = 9\nnz = 7\nnxobs = 6\nnyobs = 8\nnzobs = 9\n\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"We then construct some covariance matrices for model parameters (mathbfC_rmM^rmx    mathbfC_rmM^rmy   mathbfC_rmM^rmz) and observed data (mathbfC_rmD^rmx   mathbfC_rmD^rmy   mathbfC_rmD^rmz). The forward relation (forward model) is created from three operators (mathbfG^rmx   mathbfG^rmy   mathbfG^rmz). Remark: the function mkCovSTAT used in the following example is not part of KronLinInv.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"function mkCovSTAT(sigma::Array{Float64,1},nx::Integer,ny::Integer,nz::Integer,\n                   corrlength::Array{Float64,1},kind::String) \n    function cgaussian(dist,corrlength)\n        if maximum(dist)==0.0\n            return 1.0\n        else\n            @assert(corrlength>0.0)\n            return exp.(-(dist./corrlength).^2)\n        end\n    end\n    function cexponential(dist,corrlength)\n        if maximum(dist)==0.0\n            return 1.0\n        else\n            @assert(corrlength>0.0)\n            return exp.(-(dist./corrlength))\n        end\n    end\n    \n    npts = nx*ny*nz\n    x = [float(i) for i=1:nx]\n    y = [float(i) for i=1:ny]\n    z = [float(i) for i=1:nz]\n    covmat_x = zeros(nx,nx)\n    covmat_y = zeros(ny,ny)\n    covmat_z = zeros(nz,nz)\n\n    if kind==\"gaussian\" \n        calccovfun = cgaussian\n    elseif kind==\"exponential\" \n        calccovfun = cexponential\n    else \n        println(\"Error, no or wrong cov 'kind' specified\")\n        exit()\n    end\n\n    for i=1:nx\n        covmat_x[i,:] .= sigma[1]^2 .* \n            calccovfun(sqrt.((x.-x[i]).^2),corrlength[1])\n    end\n    for i=1:ny\n        covmat_y[i,:] .= sigma[2]^2 .* \n            calccovfun(sqrt.(((y.-y[i])).^2),corrlength[2])\n    end\n    for i=1:nz\n        covmat_z[i,:] .= sigma[3]^2 .* \n            calccovfun(sqrt.(((z.-z[i])).^2),corrlength[3])\n    end\n    \n    return covmat_x,covmat_y,covmat_z\n end\n nothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# standard deviations\nsigmaobs  = [0.1, 0.1, 0.1] \nsigmam    = [0.7, 0.8, 0.8] \n# correlation lengths\ncorlenobs = [1.3, 1.4, 1.4] \ncorlenm   = [2.5, 2.5, 2.5] \n# create the covariance matrices on observed data\nCd1,Cd2,Cd3 = mkCovSTAT(sigmaobs,nxobs,nyobs,nzobs,corlenobs,\"gaussian\")\n# create the covariance matrices on model parameters\nCm1,Cm2,Cm3 = mkCovSTAT(sigmam,nx,ny,nz,corlenm,\"gaussian\") \n\n# Forward model operator\nG1 = rand(nxobs,nx)\nG2 = rand(nyobs,ny)\nG3 = rand(nzobs,nz)\n\n nothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Finally, a \"true/reference\" model, in order to compute some synthetic \"observed\" data and a prior model.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# create a reference model\nrefmod = rand(nx*ny*nz)\n\n# create a prior model\nmprior = copy(refmod) .+ 0.3.*randn(length(refmod)) \n\n# create some \"observed\" data\ndobs = kron(G1,kron(G2,G3)) * refmod \n# add some noise to make it more realistic\ndobs = dobs .+ 0.02.*randn(length(dobs)) \n\n#nothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Now we have create a synthetic example to play with, which we can solve as shown in the following.","category":"page"},{"location":"#Solving-the-3D-problem-1","page":"Home","title":"Solving the 3D problem","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"In order to solve the inverse problem using KronLinInv, we first need to compute the \"factors\" using the function calcfactors(), which takes as inputs two structs containing the covariance matrices and the forward operators.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using KronLinInv\n\n# create the covariance matrix structure\nCovs = CovMats(Cd1,Cd2,Cd3,Cm1,Cm2,Cm3)\n\n# forward model operator\nGfwd = FwdOps(G1,G2,G3)\n\n# Calculate the required factors\nklifac = calcfactors(Gfwd,Covs)\n\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Now the inverse problem can be solved. We first compute the posterior mean and then a subset of the posterior covariance.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"\n# Calculate the posterior mean model\npostm = posteriormean(klifac,Gfwd,mprior,dobs)\n\n# Calculate the posterior covariance\nnpts = nx*ny*nz\nastart, aend = 1,div(npts,3) # set of rows to be computed\nbstart, bend = 1,div(npts,3) # set of columns to be computed\n\n# compute the block of posterior covariance\npostC = blockpostcov(klifac,astart,aend,bstart,bend)\n\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Author = \"Andrea Zunino\"","category":"page"},{"location":"publicapi/#","page":"API","title":"API","text":"FwdOps\nCovMats\nKLIFactors\ncalcfactors\nposteriormean\nblockpostcov","category":"page"},{"location":"publicapi/#KronLinInv.FwdOps","page":"API","title":"KronLinInv.FwdOps","text":"FwdOps\n\nA structure containing the three forward model matrices  G1, G2, G3, where  mathbfG =  mathbfG_1 otimes mathbfG_2 otimes mathbfG_3\n\n\n\n\n\n","category":"type"},{"location":"publicapi/#KronLinInv.CovMats","page":"API","title":"KronLinInv.CovMats","text":"CovMats\n\nA structure containing the six covariance matrices Cm1, Cm2, Cm3, Cd1, Cd2, Cd3, where mathbfC_rmM = mathbfC_rmM^rmx otimes  mathbfC_rmM^rmy otimes mathbfC_rmM^rmz  and quad mathbfC_rmD = mathbfC_rmD^rmx otimes  mathbfC_rmD^rmy otimes mathbfC_rmD^rmz\n\n\n\n\n\n","category":"type"},{"location":"publicapi/#KronLinInv.KLIFactors","page":"API","title":"KronLinInv.KLIFactors","text":"KLIFactors\n\nA structure containing all the factors necessary to perform further calculations with KronLinInv, as, for instance, computations of the posterior mean model or the posterior covariance matrix. The structure includes:\n\nU1, U2, U3:  mathbfU_1, mathbfU_2, mathbfU_3  of  F_sfA \ninvlambda:  big( mathbfI + mathbfLambda_1  otimes  mathbfLambda_2   otimes  mathbfLambda_3 big)^-1  of F_sfB\niUCm1, iUCm2, iUCm3:  mathbfU_1^-1 mathbfC_rmM^rmx, mathbfU_2^-1  mathbfC_rmM^rmy, mathbfU_2^-1  mathbfC_rmM^rmz of  F_sfC \niUCmGtiCd1, iUCmGtiCd1, iUCmGtiCd1:   mathbfU_1^-1 mathbfC_rmM^rmx (mathbfG^rmx)^sfT(mathbfC_rmD^rmx)^-1, mathbfU_2^-1 mathbfC_rmM^rmy (mathbfG^rmy)^sfT (mathbfC_rmD^rmy)^-1, mathbfU_3^-1 mathbfC_rmM^rmz (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1 of  F_sfD\n\n\n\n\n\n","category":"type"},{"location":"publicapi/#KronLinInv.calcfactors","page":"API","title":"KronLinInv.calcfactors","text":"calcfactors(Gfwd::FwdOps,Covs::CovMats)\n\nComputes the factors necessary to solve the inverse problem. \n\nThe factors are the ones to be stored to subsequently calculate posterior   mean and covariance. First an eigen decomposition is performed, to get\n\n   mathbfU_1 mathbfLambda_1  mathbfU_1^-1  \n   = mathbfC_rmM^rmx (mathbfG^rmx)^sfT\n  (mathbfC_rmD^rmx)^-1 mathbfG^rmx\n\n mathbfU_2 mathbfLambda_2  mathbfU_2^-1\n  =  mathbfC_rmM^rmy (mathbfG^rmy)^sfT\n  (mathbfC_rmD^rmy)^-1 mathbfG^rmy\n\n  mathbfU_3 mathbfLambda_3  mathbfU_3^-1\n  = mathbfC_rmM^rmz (mathbfG^rmz)^sfT\n  (mathbfC_rmD^rmz)^-1 mathbfG^rmz \n\nThe principal factors involved in the computation of the posterior covariance and   mean are:\n\n  F_sfA =  mathbfU_1 otimes mathbfU_2 otimes mathbfU_3 \n\n  F_sfB = big( \n  mathbfI + mathbfLambda_1  otimes  mathbfLambda_2 \n  otimes  mathbfLambda_3 \n  big)^-1 \n\n  F_sfC =\n  mathbfU_1^-1  mathbfC_rmM^rmx otimes \n  mathbfU_2^-1 mathbfC_rmM^rmy otimes \n  mathbfU_3^-1 mathbfC_rmM^rmz \n\n  F_sfD =   \n  left( mathbfU_1^-1  mathbfC_rmM^rmx (mathbfG^rmx)^sfT\n  (mathbfC_rmD^rmx)^-1 right)     otimes \n  left( mathbfU_2^-1 mathbfC_rmM^rmy  (mathbfG^rmy)^sfT\n  (mathbfC_rmD^rmy)^-1  right)      \n  otimes  left( mathbfU_3^-1 mathbfC_rmM^rmz\n  (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1 right)\n\nUses LAPACK.sygvd!(), see http://www.netlib.org/lapack/lug/node54.html.   Reduces a real symmetric-definite generalized eigenvalue problem to   the standard form. \\n   B A z = lambda z \tB = LLT \tC = LT A L \tz = L y\n\nA is symmetric\nB is symmetric, positive definite\n\nArguments\n\nGfwd: a FwdOps structure containing the three forward model matrices  G1, G2 and G3, where     mathbfG =  mathbfG_1 otimes mathbfG_2 otimes mathbfG_3\nCovs: a CovMats structure containing the six covariance matrices mathbfC_rmM = mathbfC_rmM^rmx otimes mathbfC_rmM^rmy otimes mathbfC_rmM^rmz and mathbfC_rmD = mathbfC_rmD^rmx otimes mathbfC_rmD^rmy otimes mathbfC_rmD^rmz\n\nReturns\n\nA KLIFactors structure containing all the \"factors\" necessary to perform further calculations with KronLinInv,   as, for instance, computations of the posterior mean model or the posterior covariance matrix.    The structure includes:\nU1, U2, U3:  mathbfU_1, mathbfU_2, mathbfU_3  of  F_sfA \ninvlambda:  F_sfB\niUCm1, iUCm2, iUCm3:  mathbfU_1^-1 mathbfC_rmM^rmx,  mathbfU_2^-1  mathbfC_rmM^rmy,   mathbfU_2^-1  mathbfC_rmM^rmz of  F_sfC \niUCmGtiCd1, iUCmGtiCd1, iUCmGtiCd1:  mathbfU_1^-1   mathbfC_rmM^rmx   (mathbfG^rmx)^sfT(mathbfC_rmD^rmx)^-1,   mathbfU_2^-1 mathbfC_rmM^rmy   (mathbfG^rmy)^sfT (mathbfC_rmD^rmy)^-1,   mathbfU_3^-1 mathbfC_rmM^rmz   (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1   of  F_sfD \n\n\n\n\n\n","category":"function"},{"location":"publicapi/#KronLinInv.posteriormean","page":"API","title":"KronLinInv.posteriormean","text":"posteriormean(klifac::KLIFactors,Gfwd::FwdOps,mprior::Array{Float64,1},\n              dobs::Array{Float64,1})\n\nComputes the posterior mean model.\n\nArguments\n\nklifac: a structure containing the required \"factors\" previously computed with    the function calcfactors(). It includes\nU1, U2, U3 mathbfU_1, mathbfU_2, mathbfU_3  of  F_sfA\ndiaginvlambda F_sfB\niUCmGtiCd1, iUCmGtiCd2, iUCmGtiCd3 mathbfU_1^-1 mathbfC_rmM^rmx (mathbfG^rmx)^sfT(mathbfC_rmD^rmx)^-1, mathbfU_2^-1 mathbfC_rmM^rmy (mathbfG^rmy)^sfT (mathbfC_rmD^rmy)^-1, mathbfU_3^-1 mathbfC_rmM^rmz (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1 of  F_sfD\nFwdOps: a structure containing the three forward matrices\nG1, G2, G3 mathbfG = mathbfG_1 otimes mathbfG_2 otimes mathbfG_3\nmprior: prior model (vector)\ndobs:  observed data (vector)\n\nReturns\n\nThe posterior mean model (vector)\n\n\n\n\n\n","category":"function"},{"location":"publicapi/#KronLinInv.blockpostcov","page":"API","title":"KronLinInv.blockpostcov","text":"blockpostcov(klifac::KLIFactors,astart::Int64,aend::Int64,\n             bstart::Int64,bend::Int64 )\n\nComputes a block of the posterior covariance. \n\nArguments\n\nklifac: a structure containing the required \"factors\" previously computed with    the function calcfactors(). It includes\nU1,U2,U3 mathbfU_1, mathbfU_2, mathbfU_3 of F_sfA\ndiaginvlambda F_sfBp\niUCm1, iUCm2, iUCm3  mathbfU_1^-1 mathbfC_rmM^rmx, mathbfU_2^-1  mathbfC_rmM^rmy, mathbfU_2^-1  mathbfC_rmM^rmz of  F_sfC \nastart, aend: indices of the first and last rowa of the requested block\nbstart, bend: indices of the first and last columns of the requested block\n\nReturns\n\nThe requested block of the posterior covariance.\n\n\n\n\n\n","category":"function"}]
}

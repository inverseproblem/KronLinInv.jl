var documenterSearchIndex = {"docs":
[{"location":"#Contents-1","page":"User guide","title":"Contents","text":"","category":"section"},{"location":"#","page":"User guide","title":"User guide","text":"Pages = [\"index.md\",\"publicapi.md\"]\nDepth = 2","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"–>","category":"page"},{"location":"#User-guide-1","page":"User guide","title":"User guide","text":"","category":"section"},{"location":"#","page":"User guide","title":"User guide","text":"This document describes the Julia version of the code KronLinInv.","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"If you use this code for research or else, please cite the related paper: ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"Andrea Zunino, Klaus Mosegaard (2018), An efficient method to solve large linearizable inverse problems under Gaussian and separability assumptions, Computers & Geosciences. ISSN 0098-3004, https://doi.org/10.1016/j.cageo.2018.09.005.","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"See the above mentioned paper for a detailed description.","category":"page"},{"location":"#Theoretical-background-1","page":"User guide","title":"Theoretical background","text":"","category":"section"},{"location":"#","page":"User guide","title":"User guide","text":"KronLinInv solves the linear inverse problem with Gaussian uncertainties represented by the following objective function","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"S( mathbfm) = frac12 ( mathbfG mathbfm - mathbfd_sfobs )^sfT mathbfC^-1_rmD ( mathbfG mathbfm - mathbfd_sfobs ) + frac12 ( mathbfm - mathbfm_sfprior )^sfT mathbfC^-1_rmM ( mathbfm - mathbfm_sfprior )","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"under the following separability conditions (for a 3-way decomposition):","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"mathbfC_rmM = mathbfC_rmM^rmx otimes \nmathbfC_rmM^rmy otimes mathbfC_rmM^rmz \n quad\nmathbfC_rmD = mathbfC_rmD^rmx otimes \nmathbfC_rmD^rmy otimes mathbfC_rmD^rmz \n\nquad textrm and  quad\n\nmathbfG = mathbfG^rmx otimes mathbfG^rmy otimes mathbfG^rmz  ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"From the above, the posterior covariance matrix is given by ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":" mathbfwidetildeC_rmM =  left( mathbfG^sfT \nmathbfC^-1_rmD  mathbfG + mathbfC^-1_rmM right)^-1","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"and the center of posterior gaussian is ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":" mathbfwidetildem  \n = mathbfm_rmprior+ mathbfwidetildeC_rmM  mathbfG^sfT  mathbfC^-1_rmD left(mathbfd_rmobs - mathbfG mathbfm_rmprior right)  ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"The paper describes how to transform the previous problem in order to obtain what follows.","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":" mathbfU_1 mathbfLambda_1  mathbfU_1^-1  \n = mathbfC_rmM^rmx (mathbfG^rmx)^sfT\n(mathbfC_rmD^rmx)^-1 mathbfG^rmx","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"mathbfU_2 mathbfLambda_2  mathbfU_2^-1\n=  mathbfC_rmM^rmy (mathbfG^rmy)^sfT\n(mathbfC_rmD^rmy)^-1 mathbfG^rmy","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"mathbfU_3 mathbfLambda_3  mathbfU_3^-1\n= mathbfC_rmM^rmz (mathbfG^rmz)^sfT\n(mathbfC_rmD^rmz)^-1 mathbfG^rmz   ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"The posterior covariance is expressed as","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"mathbfwidetildeC_rmM = \nleft(  \nmathbfU_1 otimes mathbfU_2 otimes mathbfU_3 \nright)\n big( \nmathbfI + mathbfLambda_1  otimes  mathbfLambda_2  otimes  mathbfLambda_3 \nbig)^-1 \nbig( \nmathbfU_1^-1  mathbfC_rmM^rmx otimes \nmathbfU_2^-1 mathbfC_rmM^rmy otimes \nmathbfU_3^-1 mathbfC_rmM^rmz \nbig)  ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"and the posterior mean model as","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"mathbfwidetildem =  \n mathbfm_rmprior +  \n Big \n left(  \nmathbfU_1 otimes mathbfU_2 otimes mathbfU_3 \nright)\n big( \nmathbfI + mathbfLambda_1  otimes  mathbfLambda_2   otimes  mathbfLambda_3 \nbig)^-1  \ntimes Big( \nleft( mathbfU_1^-1  mathbfC_rmM^rmx (mathbfG^rmx)^sfT (mathbfC_rmD^rmx)^-1 right)     otimes \nleft( mathbfU_2^-1 mathbfC_rmM^rmy  (mathbfG^rmy)^sfT (mathbfC_rmD^rmy)^-1  right)      \n \notimes  left( mathbfU_3^-1 mathbfC_rmM^rmz (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1 right)\nBig)\nBig \ntimes Big( mathbfd_rmobs - big( mathbfG^rmx otimes mathbfG^rmy otimes mathbfG^rmz big)  mathbfm_rmprior Big)  ","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"These last two formulae are those used by the KronLinInv algorithm.","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"Several function are exported by the module KronLinInv:","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"calcfactors: Computes the factors necessary to solve the inverse problem\nposteriormean(): Computes the posterior mean model\nblockpostcov(): Computes a block (or all) of the posterior covariance\nbandpostcov(): NOT YET IMPLEMENTED! Computes a band of the posterior covariance","category":"page"},{"location":"#Usage-examples-1","page":"User guide","title":"Usage examples","text":"","category":"section"},{"location":"#","page":"User guide","title":"User guide","text":"","category":"page"},{"location":"#","page":"User guide","title":"User guide","text":"Author = \"Andrea Zunino\"","category":"page"},{"location":"publicapi/#","page":"API","title":"API","text":"calcfactors\nposteriormean\nblockpostcov","category":"page"},{"location":"publicapi/#KronLinInv.calcfactors","page":"API","title":"KronLinInv.calcfactors","text":"calcfactors(Gfwd::FwdOps,Covs::CovMats)\n\nComputes the factors necessary to solve the inverse problem. \n\nThe factors are the ones to be stored to subsequently calculate posterior   mean and covariance. First an eigen decomposition is performed, to get\n\n   mathbfU_1 mathbfLambda_1  mathbfU_1^-1  \n   = mathbfC_rmM^rmx (mathbfG^rmx)^sfT\n  (mathbfC_rmD^rmx)^-1 mathbfG^rmx\n\n mathbfU_2 mathbfLambda_2  mathbfU_2^-1\n  =  mathbfC_rmM^rmy (mathbfG^rmy)^sfT\n  (mathbfC_rmD^rmy)^-1 mathbfG^rmy\n\n  mathbfU_3 mathbfLambda_3  mathbfU_3^-1\n  = mathbfC_rmM^rmz (mathbfG^rmz)^sfT\n  (mathbfC_rmD^rmz)^-1 mathbfG^rmz \n\nThe principal factors involved in the computation of the posterior covariance and   mean are:\n\n  F_sfA =  mathbfU_1 otimes mathbfU_2 otimes mathbfU_3 \n\n  F_sfB = big( \n  mathbfI + mathbfLambda_1  otimes  mathbfLambda_2 \n  otimes  mathbfLambda_3 \n  big)^-1 \n\n  F_sfC =\n  mathbfU_1^-1  mathbfC_rmM^rmx otimes \n  mathbfU_2^-1 mathbfC_rmM^rmy otimes \n  mathbfU_3^-1 mathbfC_rmM^rmz \n\n  F_sfD =   \n  left( mathbfU_1^-1  mathbfC_rmM^rmx (mathbfG^rmx)^sfT\n  (mathbfC_rmD^rmx)^-1 right)     otimes \n  left( mathbfU_2^-1 mathbfC_rmM^rmy  (mathbfG^rmy)^sfT\n  (mathbfC_rmD^rmy)^-1  right)      \n  otimes  left( mathbfU_3^-1 mathbfC_rmM^rmz\n  (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1 right)\n\nUses LAPACK.sygvd!(), see http://www.netlib.org/lapack/lug/node54.html.   Reduces a real symmetric-definite generalized eigenvalue problem to   the standard form. \\n   B A z = lambda z \tB = LLT \tC = LT A L \tz = L y\n\nA is symmetric\nB is symmetric, positive definite\n\nArguments\n\nGfwd: a structure containing the three forward model matrices  G1,G2,G3, where     mathbfG =  mathbfG_1 otimes mathbfG_2 otimes mathbfG_3\nCovs: a structure containing the six covariance matrices Cm1, Cm2, Cm3, Cd1, Cd2, Cd3\n\nReturns\n\nA structure containing all the \"factors\" necessary to perform further calculations with KronLinInv,   as, for instance, computations of the posterior mean model or the posterior covariance matrix.    The structure includes:\nU1, U2, U3:  mathbfU_1, mathbfU_2, mathbfU_3  of  F_sfA \ndiaginvlambda:  F_sfB\niUCm1, iUCm2, iUCm3:  mathbfU_1^-1 mathbfC_rmM^rmx,  mathbfU_2^-1  mathbfC_rmM^rmy,   mathbfU_2^-1  mathbfC_rmM^rmz of  F_sfC \niUCmGtiCd1, iUCmGtiCd1, iUCmGtiCd1:  mathbfU_1^-1   mathbfC_rmM^rmx   (mathbfG^rmx)^sfT(mathbfC_rmD^rmx)^-1,   mathbfU_2^-1 mathbfC_rmM^rmy   (mathbfG^rmy)^sfT (mathbfC_rmD^rmy)^-1,   mathbfU_3^-1 mathbfC_rmM^rmz   (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1   of  F_sfD \n\n\n\n\n\n","category":"function"},{"location":"publicapi/#KronLinInv.posteriormean","page":"API","title":"KronLinInv.posteriormean","text":"posteriormean(klifac::KLIFactors,Gfwd::FwdOps,mprior::Array{Float64,1},\n              dobs::Array{Float64,1}; runparallel=false)\n\nComputes the posterior mean model.\n\nArguments\n\nklifac: a structure containing the required \"factors\" previously computed with    the function [calcfactors()][@ref]. It includes\nU1, U2, U3 mathbfU_1, mathbfU_2, mathbfU_3  of  F_sfA\ndiaginvlambda F_sfB\nZ1, Z2, Z3 mathbfU_1^-1 mathbfC_rmM^rmx (mathbfG^rmx)^sfT(mathbfC_rmD^rmx)^-1, mathbfU_2^-1 mathbfC_rmM^rmy (mathbfG^rmy)^sfT (mathbfC_rmD^rmy)^-1, mathbfU_3^-1 mathbfC_rmM^rmz (mathbfG^rmz)^sfT (mathbfC_rmD^rmz)^-1 of  F_sfD\nFwdOps: a structure containing the three forward matrices\nG1, G2, G3 mathbfG = mathbfG_1 otimes mathbfG_2 otimes mathbfG_3\nmprior: prior model (vector)\ndobs:  observed data (vector)\nrunparallel: whether to run the computations in parallel or not (defaults to false)\n\nReturns\n\nThe posterior mean model (vector)\n\n\n\n\n\n","category":"function"},{"location":"publicapi/#KronLinInv.blockpostcov","page":"API","title":"KronLinInv.blockpostcov","text":"blockpostcov(klifac::KLIFactors,astart::Int64,aend::Int64,\n             bstart::Int64,bend::Int64; runparallel=false )\n\nComputes a block of the posterior covariance. \n\nArguments\n\nklifac: a structure containing the required \"factors\" previously computed with    the function [calcfactors()][@ref]. It includes\nU1,U2,U3 mathbfU_1, mathbfU_2, mathbfU_3 of F_sfA\ndiaginvlambda F_sfB\niUCm1, iUCm2, iUCm3  mathbfU_1^-1 mathbfC_rmM^rmx, mathbfU_2^-1  mathbfC_rmM^rmy, mathbfU_2^-1  mathbfC_rmM^rmz of  F_sfC \nastart, aend: indices of the first and last rowa of the requested block\nbstart, bend: indices of the first and last columns of the requested block\nrunparallel: whether to run the computations in parallel or not (defaults to false)\n\nReturns\n\nThe requested block of the posterior covariance.\n\n\n\n\n\n","category":"function"}]
}

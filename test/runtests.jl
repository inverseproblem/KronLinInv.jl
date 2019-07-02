

using Test
using KronLinInv

# get all the functions
include("test_suite.jl")


#nwor = nworkers()

@testset "Tests " begin
    #println("\n Number of workers available: $nwor")
    println()

    printstyled("Testing 2D serial \n", bold=true,color=:cyan)
    @test test2D(runparallel=false)

    printstyled("Testing 2D parallel \n", bold=true,color=:cyan)
    @test test2D(runparallel=true)

    printstyled("Testing 3D serial \n", bold=true,color=:cyan)
    @test test3D(runparallel=false)

    printstyled("Testing 3D paralel \n", bold=true,color=:cyan)
    @test test3D(runparallel=true)

    println()
end




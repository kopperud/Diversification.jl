var documenterSearchIndex = {"docs":
[{"location":"#Diversification.jl-Documentation","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"","category":"section"},{"location":"","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"lorem ipsum","category":"page"},{"location":"","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"plottree(x)","category":"page"},{"location":"#Diversification.plottree-Tuple{Any}","page":"Diversification.jl Documentation","title":"Diversification.plottree","text":"plottree(x)\n\nExample:\n\nres = bds(model, data)\nplottree(res)\n\n\n\n\n\n","category":"method"},{"location":"","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"birth_death_shift(model, data)","category":"page"},{"location":"#Diversification.birth_death_shift-Tuple{Any, Any}","page":"Diversification.jl Documentation","title":"Diversification.birth_death_shift","text":"birth_death_shift(model, data[; verbose = false])\n\nCalculates average branch rates under the birth-death-shift model with a finite state space.\n\nExample:\n\nusing Diversification\n\nphy = readtree(Diversification.path(\"bears.tre\")) \nρ = 1.0  \ndata = make_SSEdata(phy, \"\", ρ; include_traits = false) \nλ = [0.1, 0.2] \nμ = [0.05, 0.15] \n\nη = 0.05 \nmodel = SSEconstant(λ, μ, η)\n\nres = birth_death_shift(model, data)\n\n\n\n\n\n","category":"method"},{"location":"","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"Econstant(t, λ, µ, ρ)","category":"page"},{"location":"#Diversification.Econstant-NTuple{4, Any}","page":"Diversification.jl Documentation","title":"Diversification.Econstant","text":"from Morlon et al. 2011 [PNAS], eq. S4\n\nE(t) = 1 - fracexp(t(lambda - mu))frac1rho + fraclambdalambda -mu Big ( exp((lambda - mu)t) - 1 Big)\n\n\n\n\n\n","category":"method"},{"location":"","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"ψ(t, λ, µ, ρ)","category":"page"},{"location":"#Diversification.ψ-NTuple{4, Any}","page":"Diversification.jl Documentation","title":"Diversification.ψ","text":"Equation S5 in Morlon et al. 2011 [PNAS]\n\npsi(s t) = e^(lambda - mu)(t - s)  1 + fracfraclambdalambda - mu(e^t(lambda - mu) - e^s(lambda-mu))frac1rho + fraclambdalambda - mu times (e^s(lambda-mu)-1)^-2\n\nWe use this one, simplified where s = 0\n\npsi(t) = frace^t(lambda - mu)  1 + fracrho lambdalambda - mu(e^t(lambda - mu) - 1)^2\n\nExample:\n\nρ = 1.0\nλ = 1.0\nμ = 0.5\nt = 0.1\n\nψ(t, λ, μ, ρ)\n\n\n\n\n\n","category":"method"},{"location":"","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"lp(λ, μ, data)","category":"page"},{"location":"","page":"Diversification.jl Documentation","title":"Diversification.jl Documentation","text":"estimate_constant_bdp(data)","category":"page"}]
}

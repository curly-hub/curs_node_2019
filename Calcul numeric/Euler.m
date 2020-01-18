function [t, x] = Euler(f, t0, tf, x0, N)
t = linspace(t0, tf, N + 1);
x = zeros(1,N);
h = (tf - t0) ./ N;
x(1) = x0;
for i=1: N 
    x(i+1) = x(i) + (h.*(f(t(i),x(i))));
end
function [t, x] = Taylor(f, t0, tf, x0, N)
    t = linspace(t0, tf, N + 1);
    x = zeros(1,N);
    h = (tf - t0) ./ N;
    x(1) = x0;
    syms t1 x1
    dfdx = matlabFunction(diff(f(t1,x1),x1));
    dfdt = matlabFunction(diff(f(t1,x1),t1));
    for i=1: N
        x(i+1) = x(i) + (h*f(t(i),x(i))) + ((h.^2)/2 * (dfdt(t(i),x(i)) + (dfdx(t(i),x(i)) * f(t(i),x(i)))));
    end
end
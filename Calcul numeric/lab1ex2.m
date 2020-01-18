f = @(x) cos(exp(x) -2) - exp(x) + 2

xaprox = lab1ex1(f,0,5,10.^-5)
interval = linspace(0,5,100);
plot(interval, f(interval))
hold on
plot(xaprox, f(xaprox), '*');
hold on
xaprox = lab1ex1(f,1,5,10.^-5)
plot(xaprox, f(xaprox), '*');
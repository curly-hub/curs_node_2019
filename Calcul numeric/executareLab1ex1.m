f = @(x) x.^3 - 7*x.^2 + 14*x - 6;
lab1ex1(f, 0 , 1, 10^-5)

interval = linspace(2,4, 100);
plot(interval, f(interval));
hold on
eps=10^(-5)
Xaprox1=lab1ex1(f,2,4,eps)
plot(Xaprox1,f(Xaprox1),'*')
%Lab 1 ex1
figure('Name', 'Exercitiu 1');
f = @(x) x.^3 - 7*x.^2 + 14*x - 6;
MetBisectiei(f, 0 , 1, 10^-5)

interval = linspace(0,4, 100);
plot(interval, f(interval));
hold on
eps=10^(-5)
Xaprox1=MetBisectiei(f,0,1,eps)
plot(Xaprox1,f(Xaprox1),'*')
hold on
Xaprox1=MetBisectiei(f,1,3.2,eps)
plot(Xaprox1,f(Xaprox1),'d')
hold on
Xaprox1=MetBisectiei(f,3.2,4,eps)
plot(Xaprox1,f(Xaprox1),'s')


figure('Name', 'Exercitiu 2');
%Lab 1 ex2
f = @(x) cos(exp(x) -2) - exp(x) + 2

xaprox = MetBisectiei(f,0,5,10.^-5)
interval = linspace(0,5,100);
plot(interval, f(interval))
hold on
plot(xaprox, f(xaprox), '*');
hold on
xaprox = MetBisectiei(f,1,5,10.^-5)
plot(xaprox, f(xaprox), '*');


figure('Name', 'Exercitiu 3');
%LAB 1 EX 3
f = @(x) x.^3 - 7*x.^2 + 14*x - 6;
syms x
df = matlabFunction(diff(f(x)))
%df = @(x) 3*x.^2 - 14*x + 14;
%interval = linspace(0,4,100);
%plot(interval,f(interval));
fplot(f, [0,4])
hold on
x0 = MetNR(f,df,0,10.^-3)
plot(x0, f(x0), 's'); 
x0 = MetNR(f,df,3.3,10.^-3)
plot(x0, f(x0), 'd'); 
x0 = MetNR(f,df,2.9,10.^-3)
plot(x0, f(x0), '*'); 



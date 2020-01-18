f = @(t) - (exp(sin(t))) ./ (exp(sin(t)) - 2);
lim_inf = 0;
lim_sup = asin(log(2)) - 0.2;
t = linspace(lim_inf,lim_sup, 100);
plot(t, f(t));
hold on
syms f1(x1,t1)
f1(t1,x1) = x1.*cos(t1) + x1.^2.*cos(t1);
[t2,x2] = Euler(f1,lim_inf,lim_sup,1,100);
%plot(t2,x2);
%hold on
[t3,x3] = Taylor(f1,lim_inf,lim_sup,1,100);
plot(t3,x3);
plot(t3, x3-x1);
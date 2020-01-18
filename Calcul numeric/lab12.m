a = 0;
b = pi;
f = @(x) sin(x);
m = 10;


fixRez = integral(f,a,b)

x = linspace(a,b,m+1)';

abs(Integrare(f,x,"dreptunghi") - fixRez)
abs(Integrare(f,x,"trapezului") - fixRez)
abs(Integrare(f,x,"simpson") - fixRez)
abs(Integrare(f,x,"simpson3") - fixRez)
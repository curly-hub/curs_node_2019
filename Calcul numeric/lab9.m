%f = @(x) sin(x);
f = @(x) exp(-x.^2);
a = - pi / 2;
b = pi/2;
%n = 3;
n=10;
%generam setul de date
X = linspace(a,b,n+1);
X = X';
Y = f(X);

%facem plot-ul
xgrafic = linspace (a,b);
plot(xgrafic, f(xgrafic));
hold on
ydirect = zeros(1, 100);
for i=1: +1: 100
    ydirect(i) = MetLagrange(X,Y,xgrafic(i));
end
plot(xgrafic,ydirect);
%PANA AICI METODA DIRECTA




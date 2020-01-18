
f = @(x) sin(x);
n=3;
%generam setul de date
a = - pi / 2;
b = pi / 2;
X = linspace(a,b,n+1);
X = X';
Y = f(X);
xgrafic = linspace (a,b);
plot(xgrafic, f(xgrafic), "--m");
hold on
ydirect = splineLex1PctE(X,Y,xgrafic);
plot(xgrafic,ydirect);
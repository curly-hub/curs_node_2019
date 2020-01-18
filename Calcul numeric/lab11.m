a = 0;
b = pi;
m = 100;
h = (b-a) / (m - 2);
f = @(x) sin(x);
x = linspace(a - h, b + h, m+1);
dy = DerivNum(x,f(x),1);
syms arg
df = matlabFunction(diff(f(arg)));
figure(1);
plot(x(2:m), df(x(2:m)), '-k');
hold on;
plot(x(2:m), dy(2:m));
figure(2);
err = abs(df(x(2:m)) - dy(2:m));
plot(x(2:m), err(1:m-1),'-k');
figure(3)
for i=2:+1:m
   richardValue(i) = Richardson(f,x(i),h,4); 
end
plot(x(2:m), df(x(2:m)), '-k');
hold on;
richardValue
plot(x(2:m), richardValue(2:m),'-k');
figure(4)
err(2:m) = abs(df(x(2:m)) - richardValue(2:m));
plot(x(2:m), err(2:m),'-k');

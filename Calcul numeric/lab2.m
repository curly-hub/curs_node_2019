%ex1
f = @(x) x.^3 - 7*x.^2 + 14*x - 6;
syms x
% df = matlabFunction(diff(f(x)));
% diff(f,x);
% diff(diff(f,x),x);
% roots([3 -14 14])
% roots([6 -14])
% epsi = 10.^-3;
% interval = linspace(0,4,100);
% %convergenta = finita
% figure('Name','Lab 2 ex 1');
% plot(interval,f(interval));
% %f' [0 1.4514] [1.4514 3.2153] [3.2153 4]
% %f'' 2.333
% %intervale ar fi [0 1.4514] [1.4154 2] [3.2513 4]
% hold on
% xaprox = MetNRmodificata(f,df, 0.2, epsi);
% plot(xaprox, f(xaprox), '*')
% 
% hold on
% xaprox = MetNRmodificata(f,df, 1.6, epsi);
% plot(xaprox, f(xaprox), 'd')
% 
% hold on
% xaprox = MetNRmodificata(f,df, 2.3, epsi); %de ce?
% plot(xaprox, f(xaprox), 's')

%ex2
%figure('Name','Lab 2 ex 2');

syms f(x)
f(x) = (x-1.5).*(x-1.5).*(x-4);
% df = diff(f(x));
% ordinuldemultiplicitate(f ,1.5);
% u = simplify(f ./ df);
% interval = linspace(1,2,100);
% plot(interval, f(interval));
% hold on
% plot(interval, u(interval));
% fMatlab = matlabFunction(f(x));
% dfMatLab = matlabFunction(diff(fMatlab(x)));
% xaprox = MetNR(fMatlab,dfMatLab, 1.3, 10.^-5);
% plot(xaprox, u(xaprox), '*')
% plot(xaprox, f(xaprox), '*')


%ex3
%a
figure('Name', 'Lab 2 ex 3');
interval = linspace(-5,5,100);
syms f(x)
f(x) = x.^3 - 18*x - 10;
plot(interval, f(interval));
roots([3 0 -18])
%d
%[-5,-2.4495] [-2.4495 2.4495] [2.4495 5]
epsi = 10.^-5;
xaprox = MetSecantei(f,-5, -2.4995, -4 , -3,epsi);
hold on
plot(xaprox, f(xaprox), '*');
xaprox = MetSecantei(f,-2.4995,2.4995, -1, 1, epsi);
hold on
plot(xaprox, f(xaprox), 's');
% %aici nu merge
xaprox = MetSecantei(f,2.4995,5,3,4,epsi);
hold on
plot(xaprox, f(xaprox), 's');
% %e
% epsi = 10.^-5;
% xaprox = metodaPozitieiFalse(f,-5,-3,epsi);
% hold on
% plot(xaprox, f(xaprox), '*');
% xaprox = metodaPozitieiFalse(f,-1.7,-1,epsi);
% hold on
% plot(xaprox, f(xaprox), 's');
% xaprox = metodaPozitieiFalse(f,3.3,4.6,epsi);
% hold on
% plot(xaprox, f(xaprox), 's');




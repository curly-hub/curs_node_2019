function y = MetDirecta(X,Y,xgrafic)
    A = fliplr(vander(X));
    a = A \ Y;
    y = polyval(flip(a'),xgrafic);
end
% An empty list is a noDups.
noDups([], []).

% Put the head in the result,
% remove all occurrences of the head from the tail,
% make a noDups out of that.
noDups([H|T], [H|T1]) :- 
    remv(H, T, T2),
    noDups(T2, T1).

% Removing anything from an empty list yields an empty list.
remv(_, [], []).

% If the head is the element we want to remove,
% do not keep the head and
% remove the element from the tail to get the new list.
remv(X, [X|T], T1) :- remv(X, T, T1).

% If the head is NOT the element we want to remove,
% keep the head and
% remove the element from the tail to get the new tail.
remv(X, [H|T], [H|T1]) :-
    X \= H,
    remv(X, T, T1).

<?php


function pipe(...$callables)
{
    return function (...$args) use ($callables) {

        return array_reduce($callables, function ($prev, $next) {
            return is_array($prev) ? $next(...$prev) : $next($prev);
        }, $args);
    };
}

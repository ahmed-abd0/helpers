<?php


function pipe(...$clousers)
{
    return function (...$args) use ($clousers) {

        return array_reduce($clousers, function ($prev, $next) {

            return is_array($prev) ? $next(...$prev) : $next($prev);
        }, $args);
    };
}

<?php

//By Ahmed Abdo 😎

if (!function_exists("getCarbon")) {
    function getCarbon(...$dates)
    {
        return count($dates) === 1
            ? Carbon::parse($dates[0])
            : collect($dates)->map(fn ($date) => Carbon::parse($date) );
    }
}

class Carbon
{
    public static function parse()
    {
    }
}

function collect()
{
    return new class
    {
        function map($callback)
        {
            return [];
        }
    };
}

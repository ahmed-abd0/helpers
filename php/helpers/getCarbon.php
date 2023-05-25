<?php

if(!function_exists("getCarbon")) {
        function getCarbon(...$dates) : Carbon | array {
            $carbon = [];

            if(count($dates) == 1) {
                return $dates[0] instanceof Carbon ? $dates[0] : Carbon::parse($dates[0]);
            }

            foreach ($dates as $date) {
                $carbon[] = $date instanceof Carbon ? $date : Carbon::parse($date);
            }

            return $carbon;
        }
}
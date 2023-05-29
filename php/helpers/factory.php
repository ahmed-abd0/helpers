<?php

//By Ahmed Abdo 😎

//bad version
function singltonFactory(string $family)
{
    $types = [
        "tri" => [
            "chair" => new stdClass(),
            "sofa" =>  new stdClass(),
            "table" => new stdClass(),
        ],
        "cube" => [
            "chair" => new stdClass(),
            "sofa" =>  new stdClass(),
            "table" => new stdClass(),
        ]
    ];

    return function (string $objectName) use ($family, $types) {
        return $types[$family][$objectName] ?? new stdClass();
    };
}

//good version
function factory(string $family)
{
    $types = [
        "tri" => [
            "chair" => fn() => new stdClass(),
            "sofa" =>  fn() => new stdClass(),
            "table" => fn() => new stdClass(),
        ],
        "cube" => [
            "chair" => fn() => new stdClass(),
            "sofa" =>  fn() => new stdClass(),
            "table" => fn() => new stdClass(),
        ]
    ];

    return function (string $objectName) use ($family, $types) {
        return $types[$family][$objectName]() ?? new stdClass();
    };
}


<?php


function factory(string $family)
{
    $types = [
        "tri" => [
            "chair" => "chairObject",
            "sofa" => "sofaObject",
            "table" => "tableObject",
        ],
        "cube" => [
            "chair" => "chairObjectCube",
            "sofa" => "sofaObjectCube",
            "table" => "tableObjectCube",
        ]
    ];

    return function (string $objectName) use ($family, $types) {
        return $types[$family][$objectName] ?? new stdClass();
    };
}

<?php

//By Ahmed Abdo 😎


interface IChair{}
interface ISofa{}
interface ITable{}
class TriChair implements IChair {}
class TriSofa implements ISofa {}
class TriTable implements ITable {}

class CubeChair implements IChair{}
class CubeSofa  implements ISofa{}
class CubeTable implements ITable{}



//bad version
function singltonFactory(string $family)
{
    $types = [
        "tri" => [
            "chair" =>  new TriChair(),
            "table" =>  new TriTable(),
            "sofa"  =>  new TriSofa(),
        ],
        "cube" => [
            "chair" =>  new CubeChair(),
            "table" =>  new CubeTable(),
            "sofa"  =>  new CubeSofa(),
        ]
    ];

    return function (string $objectName) use ($family, $types) {
        return $types[$family][$objectName] ?? new stdClass();
    };
}




function factory(string $family)
{
  
    $types = [
        "tri" => [
            "chair" => fn() => new TriChair(),
            "table" => fn() => new TriTable(),
            "sofa"  => fn() => new TriSofa(),
        ],
        "cube" => [
            "chair" => fn() => new CubeChair(),
            "table" => fn() => new CubeTable(),
            "sofa"  => fn() => new CubeSofa(),
        ]
    ];

    return function (string $objectName) use ($family, $types)  {
        return $types[$family][$objectName]() ?? new stdClass();
    };
}



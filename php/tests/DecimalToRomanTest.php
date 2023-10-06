<?php declare(strict_types=1);

namespace KataTests;

use Kata\DecimalToRoman;
use PHPUnit\Framework\TestCase;

class DecimalToRomanTest extends TestCase
{
    /**
     * @test
     *
     * @dataProvider decimalToRomanNumbersProvider
     */
    public function should_convert(string $roman, int $decimal): void
    {
        $converter = new DecimalToRoman();

        $result = $converter->convert($decimal);

        self::assertSame($roman, $result);
    }

    public function decimalToRomanNumbersProvider(): iterable
    {
        yield 'one' => [
            'roman' => 'I',
            'decimal' => 1,
        ];

        yield 'two' => [
            'roman' => 'II',
            'decimal' => 2,
        ];

        yield 'three' => [
            'roman' => 'III',
            'decimal' => 3,
        ];

        yield 'four' => [
            'roman' => 'IV',
            'decimal' => 4,
        ];

        yield 'five' => [
            'roman' => 'V',
            'decimal' => 5,
        ];

        yield 'six' => [
            'roman' => 'VI',
            'decimal' => 6,
        ];

        yield 'seven' => [
            'roman' => 'VII',
            'decimal' => 7,
        ];

        yield 'nine' => [
            'roman' => 'IX',
            'decimal' => 9,
        ];
    }
}

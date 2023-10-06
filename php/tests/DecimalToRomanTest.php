<?php declare(strict_types=1);

namespace KataTests;

use Kata\DecimalToRoman;
use PHPUnit\Framework\TestCase;

class DecimalToRomanTest extends TestCase
{
    /** @test */
    public function should_convert_1_I(): void
    {
        $converter = new DecimalToRoman();

        $result = $converter->convert(1);

        self::assertSame("I", $result);
    }

    /** @test */
    public function should_convert_2_II(): void
    {
        $converter = new DecimalToRoman();

        $result = $converter->convert(2);

        self::assertSame("II", $result);
    }

    /** @test */
    public function should_convert_3_III(): void
    {
        $converter = new DecimalToRoman();

        $result = $converter->convert(3);

        self::assertSame("III", $result);
    }
}

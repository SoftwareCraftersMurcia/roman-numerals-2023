<?php declare(strict_types=1);

namespace KataTests;

use Kata\DecimalToRoman;
use PHPUnit\Framework\TestCase;

class DecimalToRomanTest extends TestCase
{
    protected DecimalToRoman $converter;
    public function setUp(): void
    {
        parent::setUp();
        $this->converter = new DecimalToRoman();
    }

    /** @test */
    public function should_convert_1_I(): void
    {
        $result = $this->converter->convert(1);

        self::assertSame("I", $result);
    }

    /** @test */
    public function should_convert_2_II(): void
    {
        $result = $this->converter->convert(2);

        self::assertSame("II", $result);
    }

    /** @test */
    public function should_convert_3_III(): void
    {
        $result = $this->converter->convert(3);

        self::assertSame("III", $result);
    }

    /** @test */
    public function should_convert_4_IV(): void
    {
        $result = $this->converter->convert(4);

        self::assertSame("IV", $result);
    }
}

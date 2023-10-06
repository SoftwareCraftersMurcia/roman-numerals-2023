<?php declare(strict_types=1);

namespace Kata;

class DecimalToRoman
{
    public function convert(int $decimal): string
    {
        if ($decimal === 2) return "II";

        return "I";
    }
}

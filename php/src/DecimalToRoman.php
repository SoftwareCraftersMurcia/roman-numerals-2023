<?php declare(strict_types=1);

namespace Kata;

class DecimalToRoman
{
    public function convert(int $decimal): string
    {
        if ($decimal === 4) {
            return 'IV';
        }

        return $this->concatI($decimal);
    }

    private function concatI(int $decimal): string
    {
        return str_repeat('I', $decimal);
    }
}

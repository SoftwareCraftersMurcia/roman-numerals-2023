<?php declare(strict_types=1);

namespace Kata;

class DecimalToRoman
{
    public function convert(int $decimal): string
    {
        if ($decimal === 20){
            return 'XX';
        }

        if ($decimal === 10){
            return 'X';
        }

        if ($decimal === 9){
            return 'IX';
        }

        if ($decimal >= 5) {
            return 'V' . $this->concatI($decimal - 5);
        }

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

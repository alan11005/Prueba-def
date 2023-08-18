<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaveShowingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "movie_id" => "required",
            "time_start" => "required|date_format:H:i", // Verifica que time_start tenga formato de hora (HH:mm)
            "time_end" => "required|date_format:H:i|after:time_start", // Verifica que time_end tenga formato de hora y sea después de time_start
        ];
    }
}

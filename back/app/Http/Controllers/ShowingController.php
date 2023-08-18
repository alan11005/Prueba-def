<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveShowingRequest;
use App\Models\Showing;
use Illuminate\Http\Request;

class ShowingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Showing::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveShowingRequest $request)
    {
        $showing = Showing::create($request->all());
        return response() -> json([
            'res' => true,
            'msg' => 'Función guardada correctamente',
            'data' => $showing
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Showing $showing)
    {
        return response() -> json([
            'res' => true,
            'pelicula' => $showing
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Showing $showing)
    {
        $showing->update($request->all());
        return response()->json([
            'res' => true,
            'msg' => 'Función actualizada correctamente',
            'Pelicula' => $showing
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Showing $showing)
    {
        $showing -> delete();
        return response()->json([
            'res' => true,
            'msg' => 'Función eliminada correctamente'
        ], 200);
    }
}

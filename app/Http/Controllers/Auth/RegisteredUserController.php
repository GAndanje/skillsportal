<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'indexNumber' => 'required|string|max:255',
            'currentLocation' => 'required|string|max:255',
            'highestLevelOfEducation' => 'required|string|max:255',
            'availabilityForRemoteWork' => 'required|string|max:255',
            'softwareExpertise' => 'required|string|max:255',
            'softwareExpertiseLevel' => 'required|string|max:255',
            'levelOfResponsibility' => 'required|string|max:255',
            'language' => 'required|string|max:255',
            'dutyStation' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'password_confirmation' => $request->password_confirmation,
            'indexNumber' => $request->indexNumber,
            'currentLocation' => $request->currentLocation,
            'highestLevelOfEducation' => $request->highestLevelOfEducation,
            'availabilityForRemoteWork' => $request->availabilityForRemoteWork,
            'softwareExpertise' => $request->softwareExpertise,
            'softwareExpertiseLevel' => $request->softwareExpertiseLevel,
            'levelOfResponsibility' => $request->levelOfResponsibility,
            'language' => $request->language,
            'dutyStation' => $request->dutyStation

        ]);

        event(new Registered($user));

        Auth::login($user);

        return to_route('dashboard');
    }
}

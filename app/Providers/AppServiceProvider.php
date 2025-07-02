<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;
use Carbon\CarbonInterval;
use Laravel\Passport\Passport;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Passport::tokensExpireIn(CarbonInterval::days(60));
        Passport::refreshTokensExpireIn(CarbonInterval::days(60));
        Passport::personalAccessTokensExpireIn(CarbonInterval::months(6));
    }
}

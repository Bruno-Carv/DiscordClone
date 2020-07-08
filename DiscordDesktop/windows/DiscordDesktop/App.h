#pragma once

#include "App.xaml.g.h"

namespace winrt::DiscordDesktop::implementation
{
    struct App : AppT<App>
    {
        App() noexcept;
    };
} // namespace winrt::DiscordDesktop::implementation



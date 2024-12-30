import React from 'react'

function Header() {
  return (
    <div>   <header class="flex items-center justify-between p-4">
        <a href="https://rombo.co/" class="motion-preset-slide-down text-2xl font-black">Rombo</a>
        <nav class="mr-4 flex gap-6 font-semibold">
            <a href="https://rombo.co/" class="motion-preset-rebound-down motion-delay-[400ms]">Products</a>
            <a href="https://rombo.co/" class="motion-preset-rebound-down motion-delay-[450ms]">Learn More</a>
            <a href="https://rombo.co/" class="motion-preset-rebound-down motion-delay-[500ms]">Contact Us</a>
        </nav>
    </header> </div>
  )
}

export default Header;
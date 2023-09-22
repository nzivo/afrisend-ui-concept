<template>
  <!-- Container -->
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        <!-- Col -->
        <div
          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          style="
            background-image: url('https://source.unsplash.com/oWTW-jNGl9I/600x800');
          "
        ></div>
        <!-- Col -->
        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <div class="px-8 mb-4">
            <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
            <p class="mb-4 text-sm text-gray-700">
              We get it, stuff happens. Just enter your email address below and
              we'll send you a link to reset your password!
            </p>
          </div>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Email Address..."
              />
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-green-900 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Reset Password
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <h6 class="text-sm text-gray-500">
                Don't have an account?
                <RouterLink
                  :to="{ name: 'registration' }"
                  class="inline-block text-sm text-green-700 align-baseline hover:text-green-800 hover:font-bold underline-with-svg"
                >
                  Create an Account!
                </RouterLink>
              </h6>
            </div>
            <div class="text-center">
              <h6 class="text-sm text-gray-500">
                Already have an account?
                <RouterLink
                  :to="{ name: 'login' }"
                  class="inline-block text-sm text-green-700 align-baseline hover:text-green-800 hover:font-bold underline-with-svg"
                >
                  Login!
                </RouterLink>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

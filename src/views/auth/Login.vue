<template>
  <!-- <div class="container w-full mx-auto"> -->
  <div class="flex justify-center">
    <!-- Row -->
    <div class="w-full flex">
      <!-- Col -->
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-2/3 bg-cover"
        style="background-image: url('/images/login.jpg')"
      ></div>
      <!-- Col -->
      <div class="w-full lg:w-1/3 bg-white p-5">
        <h3 class="px-8 pt-6 text-2xl font-bold">Welcome Back!</h3>
        <h6 class="px-8 text-sm text-gray-500">
          The most secure, easiest and fastest way to transfer money
        </h6>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="username"
            >
              Username
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-xs italic text-red-500">Please choose a password.</p>
          </div>
          <div class="mb-4">
            <input
              class="mr-2 leading-tight"
              type="checkbox"
              id="checkbox_id"
            />
            <label class="text-sm" for="checkbox_id"> Remember Me </label>
          </div>
          <div class="mb-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-green-900 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <hr class="mb-2 border-t" />
          <div class="text-end">
            <RouterLink
              :to="{ name: 'forgotPassword' }"
              class="inline-block text-sm text-green-700 align-baseline hover:text-green-800 hover:font-bold"
            >
              Forgot Password?
            </RouterLink>
          </div>
        </form>
        <div class="px-8">
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
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

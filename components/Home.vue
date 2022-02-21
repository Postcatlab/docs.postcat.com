<template>
  <h3 class="text-effect">
    Make your API
    <div class="mask" ref="mask">
      <span data-show>Detailed</span>
      <span>Faster</span>
      <span>Smarter</span>
      <span>Easier</span>
    </div>
  </h3>
  <section class="type-effect">
    <h1>Easy-to-use API testing desktop tool.</h1>
  </section>
</template>

<script>
export default {
  name: "home",
  mounted() {
    setInterval(() => {
      const show = this.$refs.mask.querySelector("span[data-show]");
      const next =
        show.nextElementSibling ||
        this.$refs.mask.querySelector("span:first-child");
      const up = this.$refs.mask.querySelector("span[data-up]");
      if (up) {
        up.removeAttribute("data-up");
      }
      show.removeAttribute("data-show");
      show.setAttribute("data-up", "");
      next.setAttribute("data-show", "");
    }, 2000);
  },
};
</script>
<style lang="stylus" scoped>
:root {
  --offset: 6px;
}

body {
  padding: 0;
}

h3.text-effect {
  width: 100%;
  height: calc(100vh - 60px);
  font-size: 80px;
  letter-spacing: -0.02em;
  color: #1d1d1f;
  margin: 0;
  display: flex;
  align-items: center;
}

.mask {
  height: 100px;
  flex: 1;
  position: relative;
  margin-top: var(--offset);
  overflow: hidden;
  font-size: 80px;

  span {
    display: inline-block;
    box-sizing: border-box;
    padding-left: 20px;
    position: absolute;
    top: 100px;
    padding-bottom: var(--offset);
    background-size: 100% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-repeat: no-repeat;

    &[data-show] {
      transform: translateY(-100%);
      transition: 0.5s transform ease-in-out;
    }

    &[data-up] {
      transform: translateY(-200%);
      transition: 0.5s transform ease-in-out;
    }

    &:nth-child(1) {
      background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
    }

    &:nth-child(2) {
      background-image: linear-gradient(45deg, #18e198 50%, #00785a);
    }

    &:nth-child(3) {
      background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
    }

    &:nth-child(4) {
      background-image: linear-gradient(45deg, #fa7671 50%, #a22041);
    }
  }
}

.type-effect {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    padding: 0;
    font-family: monospace;
    width: 10ch;
    white-space: nowrap;
    overflow: hidden;
    animation: 5s typing steps(13, jump-none) infinite;
  }
}

@keyframes typing {
  0% {
    width: 1ch;
  }

  70% {
    width: 38ch;
  }

  100% {
    width: 38ch;
  }
}
</style>
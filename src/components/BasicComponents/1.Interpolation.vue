<template>
  <div>
    <h1>1.Interpolation</h1>
    <div class="main_content_two">
      <p> String {{ Name }} --> dynamic rendered data inside the {{}}</p>
      <p>Sum: {{ 10 + 60 }} --> Inside the Scope Vue Rendered and show result {10+60}</p>
      <p>Number: {{number}} --> Just number inside the scope</p>
      <p>Method: {{ Hello() }} --> {Hello()} call this function in method and return result</p>
      <p>If Statement: {{ IsOk ? 'I Am Okay' : 'I Am Not Okay' }} --> if Statement in data true I am Okay Else Not Okay</p>
      <p>String.Split.Reverse.Join: {{ string.split('').reverse().join('') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    Name: "Mushex",
    number: 500,
    IsOk: true,
    string: "My Name Is"
  }),
   methods: {
    Hello: function() {
      return "I am Function"
    }
   }
}
</script>

<style scoped lang="scss">
h1{
  color: white;
}
.main_content_two{
  p{
    color: white;
  }
}
</style>

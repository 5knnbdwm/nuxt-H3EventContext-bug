<script setup lang="tsx">
const { data } = await useFetch("/api/test");
</script>

<template>
  <code>
    data type is being inferred as `unknown`.
    <br />
    <br />
    <pre>{{ data }}</pre>
    <br />
    If you now go into `/server/types/h3.d.ts` and uncomment the `foo` property
    (well just the import), you will see that the type is now inferred as
    `{"message": string}`.
  </code>
</template>

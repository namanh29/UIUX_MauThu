<template>
  <CFooter>
    <div>
      <span class="ms-1"
        >&copy; {{ new Date().getFullYear() }} Copyright by</span
      >
      <a href="https://coreui.io" target="_blank">
        Công ty Cổ phần An toàn thông tin và truyền thông</a
      >
    </div>
    <div class="ms-auto">
      <span class="me-1" target="_blank">Phiên bản</span>
      <a href="https://coreui.io/vue">2019.1</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

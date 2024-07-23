<script>
    import { page } from '$app/stores';
  </script>
  
  <nav class="flex shadow h-[50px]" >
      <div class="container flex items-center justify-center p-6 mx-auto gap-2" >
          <a href="/" class="{($page.url.pathname === '/') ? 'active' : ''}">Inicio</a>
  
          <a href="/colors" class="{($page.url.pathname === '/colors') ? 'active' : ''}">Colores</a>
  
          <a href="/gradients" class="{($page.url.pathname === '/gradients') ? 'active' : ''}">Degradados</a>
  
          <a href="/patterns" class="{($page.url.pathname === '/patterns') ? 'active' : ''}">Fondos</a>
      </div>
  </nav>
  
  <style>
      a {
          color: #a5694d;
      }
      .active {
          color: #d35400;
          font-weight: bold;
      }
  </style>
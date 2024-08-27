import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/---/', // 리포지토리 이름으로 설정
  plugins: [react()],
});

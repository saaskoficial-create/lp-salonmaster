# SalonMaster Landing Page

Landing page estática da SalonMaster, construída com Astro, TypeScript e componentes por seção.

## Desenvolvimento

```powershell
npm ci
npm run dev
npm run check
npm run format:check
npm run build
npm run preview
```

## Configuração

Copie `.env.example` para `.env` para configurar o domínio canônico e o canal comercial:

- `PUBLIC_SITE_URL`: domínio canônico, padrão `https://salonmaster.com.br`
- `PUBLIC_WHATSAPP_NUMBER`: número comercial apenas com dígitos

O formulário não salva dados nem usa API. Ao concluir, ele monta a mensagem no navegador e abre o WhatsApp quando o número comercial estiver configurado.

## Publicação

- Node.js 24 recomendado
- Saída estática: `dist/`
- Antes de publicar: `npm run format:check`, `npm run check`, `npm run build` e `npm run audit:production`

Analytics permanece desativado até existir um identificador próprio e uma estratégia de consentimento.

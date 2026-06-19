# Flui Mobile

Projeto desenvolvido para o Enterprise Challenge FIAP.

## Sobre o Projeto

A Flui é uma aplicação mobile voltada para motoristas de veículos elétricos. O objetivo é facilitar a localização de pontos de recarga através de uma interface intuitiva, sustentável e acessível.

Além da busca por estações de recarga, o aplicativo apresenta recursos voltados para segurança, acessibilidade e suporte familiar por meio da funcionalidade Flui Care.

## Funcionalidades

* Mapa de pontos de recarga
* Busca de estações
* Ficha detalhada dos carregadores
* Sistema de favoritos
* Perfil do usuário
* EcoScore (indicadores de sustentabilidade)
* Flui Care (segurança, acessibilidade e suporte familiar)

## Diferenciais

### Flui Care

O Flui Care amplia a experiência tradicional de aplicativos de recarga ao considerar fatores importantes para diferentes perfis de usuários.

Entre os recursos simulados estão:

* Proximidade de hospitais
* Proximidade de farmácias
* Fraldários
* Salas de amamentação
* Áreas monitoradas
* Pontos acessíveis para pessoas com mobilidade reduzida

### EcoScore

O EcoScore apresenta indicadores ambientais relacionados ao uso de veículos elétricos:

* CO₂ evitado
* Uso de energia renovável
* Metas sustentáveis da comunidade

## Tecnologias Utilizadas

* React Native
* Expo SDK 54
* Expo Router
* TypeScript
* GitHub

## Estrutura do Projeto

```text
app/
├── (tabs)/
│   ├── index.tsx
│   ├── mapa.tsx
│   ├── busca.tsx
│   ├── favoritos.tsx
│   ├── perfil.tsx
│   ├── care.tsx
│   └── ecoscore.tsx
│
└── carregador/
    └── [id].tsx
```

## Como Executar

```bash
npm install
npx expo start
```

Abra o aplicativo utilizando o Expo Go.

## Integrantes

Adicionar nomes completos e RMs do grupo.

## Repositório

https://github.com/biwnkw/flui-mobile

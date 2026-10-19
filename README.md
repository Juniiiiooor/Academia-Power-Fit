# Academia Power Fit

Site institucional da **Academia Power Fit** — projeto da equipe de Desenvolvimento Web para captação de novos alunos.

## 📌 Conteúdo do site

- **Planos** — Essencial (R$ 79), Performance (R$ 119) e Premium (R$ 189)
- **Horários** — grade completa das aulas coletivas e da recepção
- **Estrutura** — musculação, cardio, aulas coletivas, vestiários, estacionamento e cantina
- **Contato** — formulário validado, endereço, telefone e redes sociais

## 🗂️ Estrutura de arquivos

```
Academia-Power-Fit/
├── index.html         # Página única com todas as seções
├── script.js          # Menu mobile, validação do formulário e animações
├── vercel.json        # Configuração do deploy na Vercel
└── css/
    ├── base.css       # Variáveis, header, hero, botões e footer
    ├── planos.css     # Cards de planos
    ├── horarios.css   # Tabela de horários
    ├── estrutura.css  # Cards da estrutura
    ├── contato.css    # Formulário, contato e CTA final
    └── responsivo.css # Media queries (tablet e mobile)
```

## 🌿 Branches

| Branch | Responsável | Descrição |
|---|---|---|
| `main` | — | Branch principal (produção) |
| `feat/planos` | Membro A | Seções de Planos e Horários |
| `feat/estrutura` | Membro B | Seção de Estrutura e layout responsivo |
| `feat/contato` | Membro C | Contato, CTA, JavaScript e deploy |

## 🔄 Fluxo de trabalho

1. Crie uma branch a partir da `main`: `git checkout -b feat/nome-da-tarefa`
2. Faça seus commits seguindo a Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)
3. Abra um **Pull Request** e peça revisão para outro membro da equipe
4. Após aprovação, faça o **Merge na `main`** (use `--no-ff` para manter o histórico)
5. A Vercel publica a atualização automaticamente a cada `push` na `main`

### Comandos usados neste projeto

```bash
git checkout -b feat/planos                # cria branch da tarefa
git add -A && git commit -m "feat(planos): adiciona Planos e Horarios"
git checkout main
git merge feat/planos --no-ff              # merge mantendo o histórico
git push -u origin main --all              # envia tudo para o GitHub
```

## 🚀 Deploy (Vercel)

1. Acesse [vercel.com](https://vercel.com) e faça login com a conta do GitHub
2. Clique em **Add New → Project** e importe o repositório `Juniiiiooor/Academia-Power-Fit`
3. Não é preciso configurar build — é um site estático. Clique em **Deploy**
4. Pronto! O site fica online e **todo novo `push` na `main` faz o re-deploy automático**

## 👥 Participação da equipe

Cada membro atua em uma branch própria, abrindo Pull Requests e revisando o código dos colegas. Conflitos de merge são resolvidos em conjunto na branch principal antes do deploy.

## 📋 Changelog

- v1.3 — Seção Contato, CTA, JavaScript e deploy Vercel (Membro C)
- v1.1 — Seções de Planos e Horários (Membro A)
- v1.0 — Estrutura base do projeto

# Sistema de Caronas na UFRPE

## Equipe de Desenvolvimento

* **Lucas Pontes França Diniz Lima**
* **Gleiciane Priscila de Oliveira Andrade**
* **Natã Gabriel Cataldi dos Santos**
* **Daniel Heleno de Oliveira Santana Junior**
* **Mariene Silva da Cruz Santos**

## Descrição

O Sistema de Caronas da UFRPE é uma plataforma inteligente de caronas desenvolvida exclusivamente para a comunidade acadêmica da Universidade Federal Rural de Pernambuco. O sistema visa diminuir a emissão de CO2 na atmosfera e otimizar o deslocamento de alunos, centralizando a oferta e busca de caronas em um ambiente seguro e sustentável. O aplicativo utiliza algoritmos de matching para conectar motoristas e passageiros que compartilham rotas semelhantes, promovendo a redução do uso de veículos individuais, a economia de custos e a diminuição da emissão de carbono. 

## Requisitos Funcionais

### 1. Gestão de Perfis e Segurança Institucional

- **REQ01**: Realizar o cadastro e autenticação de usuários obrigatoriamente via e-mail institucional @ufrpe.br.
- **REQ02**: Implementar verificação de perfil vinculando o usuário ao seu curso ou departamento.
- **REQ03**: Gerenciar sistema de reputação e avaliações após cada viagem para garantir a confiabilidade da comunidade.

### 2. Viagens

- **REQ04**: Gerenciamento de Caronas (CRUD): Permitir que motoristas criem, editem e removam ofertas de carona com detalhes de trajeto e vagas.
- **REQ05**: Filtrar e sugerir caronas automaticamente com base na compatibilidade de rotas entre motorista e passageiro.
- **REQ06**: Sugerir valores de contribuição baseados na distância e consumo médio do veículo.
- **REQ07**: Atualizar automaticamente a disponibilidade do veículo conforme reservas são confirmadas.
- **REQ08**: Compartilhar localização em tempo real durante as caronas.

### 3. Logística e Comunicação

- **REQ09**: Sugerir as melhores rotas e pontos de encontro seguros dentro ou fora do campus.
- **REQ10**: Permitir o agendamento antecipado de caronas para até 5 dias da semana.
- **REQ11**: Chat interno para facilitar a comunicação entre os membros da carona sem a necessidade de expor números de telefone pessoais.

### 4. Sustentabilidade e Governança

- **REQ12**: Calcular a estimativa de redução de emissão de CO2 e disponibilizar para usuário após a finalização da carona.
- **REQ13**: Arquivar automaticamente caronas após o início da viagem.
- **REQ14**: Permitir que administradores bloqueiem usuários denunciados ou perfis não validados (ANALISAR).
- **REQ15**: Gerar relatórios sobre a eficiência do transporte compartilhado, mostrando a redução na geração de CO2 e confiabilidade dos usuários no sistema, em formato PDF e CSV.

## Requisitos Não Funcionais

- **RNF01**: O sistema deve possuir uma interface responsiva, garantindo uma navegação fluida em dispositivos móveis e desktops.
- **RNF02**: O sistema deve tratar os dados dos usuários em conformidade com a LGPD, garantindo que as senhas sejam criptografadas.
- **RNF03**: 
- **RNF04**:
  
## Possíveis APIs/Bibliotecas a Serem Usadas

- **Nome** – Descrição
- **React.js** - Framework para criar a interface do site.
- **Node.js & Express** – Para criar o servidor que gerencia os dados das caronas.
- **Google Maps API** – Exibir mapas e calcular as rotas das caronas.
- **Firebase Authentication** – Login usando o domínio @ufrpe.br.
- **Tailwind CSS** – Garantir funcionalidade no celular.
- **Supabase** – Armazenar dados de usuários e viagens.
- **Axios** – Conexão do Frontend ao servidor Backend.

# GCS-2018.2

Projeto desenvolvido na disciplina de Gerência de configuração de Software - 2018/2 na UNISINOS.

Sobre o projeto:
O presente arquivo visa definir o Plano de Gerência da Configuração do Projeto "Glossário de Termos WIKI-GP1"

Sumário



1. INTRODUÇÃO

	O presente plano de Gerência de Configuração visa estabelecer e manter a integridade do produto final do projeto WIKI-GP1, desde a sua fase de planejamento e projeto, até o encerramento do contrato de suporte, para isso o mesmo usará ferramentas para controle de versões de seus itens de configuração, bem como políticas para o processo de mudanças.

	1.1 - Convenções, Termos e Abreviações:

	Esta seção explica o conceito de alguns termos importantes que serão mencionados no decorrer deste documento. Estes termos são descritos na 		tabela abaixo, estando apresentados por ordem alfabética .

	Termo |	Descrição
	| :------------: | :------------ |
	| ACP   | Sigla para documentos de acompanhamento e qualidade   |
	| Baseline | Linha de base. Conjunto de versões de itens de configuração comprovadamente estáveis. Uma baseline é usada como base no desenvolvimento da próxima fase do artefato e tem suas mudanças controladas por um processo formal. |
	|CCB | Do inglês, ChangeControl Board, grupo responsável por autorizar modificações nos itens de configuração.|
	| CR | Do inglês, ChangeRequest, solicitação de mudança, aplicado a melhorias, defeitos, solicitações de baseline, solicitações de release, dúvidas, tarefas e outros tipos. |
	|CVS | Do inglês, ControlVersion System, sistema de controle de versão (configuração) de software. |
	|GCO |Sigla para identificação de documentos de Gerência. |
	|PLN | Sigla para documentos de planejamento. |
	|IMP | Sigla para documentos de implantação e trabalho.|

	1.2 - Evoluções:

	O plano de gerência de configuração deve ser mantido atualizado para refletir o planejamento corrente. Dessa forma, as seguintes situações 			representam gatilhos para atualização do plano e nova aprovação deste documento:

	a) Mudança nos itens de configuração;
	b) Mudança na identificação dos arquivos;
	c) Mudança nas ferramentas utilizadas;
	d) Mudança do padrão de versionamento;

2. FERRAMENTAS E CONFIGURAÇÕES

	Esta sessão visa identificar as ferramentas a serem utilizadas no decorrer do projeto.

	2.1 - Ferramentas:

	Ferramenta		Versão	Objetivo
	Visual Studio Code......1.26....Ferramenta para desenvolvimento
	Trello..................NA......Controle interno do projeto
	GitHub Desktop..........1.3.....Cliente de acesso ao repositório

	2.2 - Configuração da ferramenta de controle de versão:

	Tipo do Repositório............	CVS
	Servidor do repositório........	https://github.com	Diretório home.................	/joicecg/GCS-2018.2
	Forma de acesso................	GitHub Desktop, Shell e GitHub.com

	2.3 - Configuração da ferramenta de controle de mudança:

	Ferramenta utilizada...........	Bugzilla


	CATEGORIA			RESPONSÁVEL
	Mudança de Requisitos..........	Jocelito Ferreira
	Defeitos....................... Lucas Warpechowski
	Solicitações de Baselines...... Joice C. Gomes
	Novos Requisitos...............	Jocelito Ferreira
	Tarefa.........................	Felipe Lacerda
	Implementação..................	Felipe Lacerda
	Agrupamento de CR..............	Joice C. Gomes
	Solicitação de Release.........	Lucas Warpechowski

3. POLÍTICA DE GERÊNCIA E CONFIGURAÇÃO

	3.1 - Identificadores:

	Nesta seção, serão apresentados os padrões utilizados no projeto tais como, identificadores, nomes de arquivos, nomes de branches, versionamento 	(sistema, documentos e baselines).

	a) Identificadores do projeto e produtos:

	GC-2018-2............ Identificador do projeto
	WK-GP1............... Identificador da aplicação WIKI-GP1
	WK-GP1/MD-<nome>..... Identificador dos módulos da aplicação WIKI-GP1

	b) Nomenclatura de documentos:

	Diagrama de Classes................. GC_WK-GP1_PLN_DiagramaClasses
	Documento de Arquitetura............ GC_WK-GP1_PLN_Arquitetura
	Modelo de Projeto................... GC_WK-GP1_PLN_ModeloProjeto
	Plano de Gerência de Configuração... GC_WK-GP1_GCO_PlanoGerencia
	Checklist de implementação.......... GC_WK-GP1_IMP_ChecklistImplementacao
	Cronograma.......................... GC_WK-GP1_PLN_Cronograma
	Relatório de acompanhamentointerno.. GC_WK-GP1_ACP_Interno_DDMMAA
	Documento de Requisitos............. GC_WK-GP1_PLN_DocumentoRequisitos
	Planilha de resultados de Testes.... GC_WK-GP1_ACP_ResultadosTestes_DDMMAA

	c) Nomenclaturas de tags/labels:

	Baseline funcional........... GC_WK-GP1_FUNC
	Baselines.................... GC_WK-GP1_BASE_NN (NN é um sequencial simples).
	Branch de Release............ GC_WK-GP1_BRLS_XX.YY
	Releases..................... GC_WK-GP1_RLS_XX.YY
	Versionamento................ XX.YY (XX é o número da versão e YY é o sequencial dos releases da versão atual).

	3.2 - Local de Armazenamento:
	
	Esta seção apresenta onde são armazenados os artefatos do projeto.

	Diretório		Descrição
	builds.................	Builds do sistema geradas para fins de teste ou release.
	releases............... Versões de release do sistema.
	testes................. Versões não estáveis para teste do sistema.
	código.................	Contém diretórios para o código fonte, bibliotecas utilizadas e scripts de compilação.
	nome-projeto...........	Conteúdo do projeto que é alterado pelos desenvolvedores.
	bin....................	Código compilado do sistema
	WebContent.............	Guarda os arquivos jsp, javascript, css, imagens e as configurações WEB.
	documentos.............	Toda documentação do projeto.
	    configuração.......	Documentos de gerência de configuração de software.
	design.................	Artefatos de design, como modelos UML e descrições da arquitetura do sistema.
	geral..................	Documentos gerais.
	    planejamento....... Documentos de planejamento.
	    qualidade..........	Documentos de garantia de qualidade de software.
	requisitos.............	Documentos de requisito.
	    teste..............	Documentos de teste para o projeto, incluindo documentos de procedimentos de testes, planos de teste, etc.	
	relatórios.............	Todos os relatórios do projeto.
	    teste.............. Relatórios de teste.

	3.3 - Itens de Configuração
	
	Esta seção define como será feita a classificação dos artefatos do projeto.
	
	Artefatos gerenciais...........	Todos os documentos relacionados à gerência de projetos.
	Artefatos de planejamento......	Todos os documentos relacionados ao planejamento (qualidade, gerência de configuração, testes, etc).
	Artefatos de requisitos........	Documento de requisitos, diagramas de casos de uso, especificação de casos de uso, etc.
	Artefatos de análise e projeto.	Documento de arquitetura, diagramas UML diversos e diagramas entidade-relacionamento.
	Arquivos de configuração.......	Arquivos com parâmetros utilizados para configuração do ambiente e execução do sistema.
	Código-fonte...................	Arquivos contendo as classes do sistema.
	Builds.........................	Releases do projeto executando em produção.
		
	
	


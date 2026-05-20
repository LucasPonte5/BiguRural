package org.example.view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class CadastroView {

    private final Scene scene;

    public CadastroView(Stage stage) {

        Label titulo = new Label("Cadastro");
        titulo.setStyle("-fx-font-size: 24px; -fx-font-weight: bold;");

        Label icone = new Label("👤");
        icone.setStyle("-fx-font-size: 45px;");

        TextField nomeField = new TextField();
        nomeField.setPromptText("Nome completo");

        TextField matriculaField = new TextField();
        matriculaField.setPromptText("Matrícula");

        TextField emailField = new TextField();
        emailField.setPromptText("E-mail institucional");

        PasswordField senhaField = new PasswordField();
        senhaField.setPromptText("Senha");

        PasswordField confirmarSenhaField = new PasswordField();
        confirmarSenhaField.setPromptText("Confirmar senha");

        CheckBox termosCheck = new CheckBox("Li e aceito os Termos de Uso e Política de Privacidade");

        Button cadastrarButton = new Button("Cadastrar");
        cadastrarButton.setMaxWidth(Double.MAX_VALUE);
        cadastrarButton.setStyle("-fx-background-color: #007A33; -fx-text-fill: white; -fx-font-weight: bold;");

        Hyperlink entrarLink = new Hyperlink("Entrar");

        Label mensagem = new Label();

        cadastrarButton.setOnAction(e -> {
            String nome = nomeField.getText();
            String matricula = matriculaField.getText();
            String email = emailField.getText();
            String senha = senhaField.getText();
            String confirmarSenha = confirmarSenhaField.getText();

            if (nome.isEmpty() || matricula.isEmpty() || email.isEmpty()
                    || senha.isEmpty() || confirmarSenha.isEmpty()) {
                mensagem.setText("Preencha todos os campos.");
                mensagem.setStyle("-fx-text-fill: red;");
                return;
            }

            if (!email.endsWith("@ufrpe.br")) {
                mensagem.setText("Use um e-mail @ufrpe.br");
                mensagem.setStyle("-fx-text-fill: red;");
                return;
            }

            if (!senha.equals(confirmarSenha)) {
                mensagem.setText("As senhas são diferentes.");
                mensagem.setStyle("-fx-text-fill: red;");
                return;
            }

            if (!termosCheck.isSelected()) {
                mensagem.setText("Aceite os termos para continuar.");
                mensagem.setStyle("-fx-text-fill: red;");
                return;
            }

            mensagem.setText("Cadastro realizado com sucesso.");
            mensagem.setStyle("-fx-text-fill: green;");
        });

        entrarLink.setOnAction(e -> {
            LoginView loginView = new LoginView(stage);
            stage.setScene(loginView.getScene());
        });

        VBox layout = new VBox(12);
        layout.setPadding(new Insets(30));
        layout.setAlignment(Pos.CENTER);
        layout.setStyle("-fx-background-color: white;");

        layout.getChildren().addAll(
                titulo,
                icone,
                nomeField,
                matriculaField,
                emailField,
                senhaField,
                confirmarSenhaField,
                termosCheck,
                cadastrarButton,
                new Label("Já tem uma conta?"),
                entrarLink,
                mensagem
        );

        scene = new Scene(layout, 390, 650);
    }

    public Scene getScene() {
        return scene;
    }
}

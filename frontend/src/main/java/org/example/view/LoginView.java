package org.example.view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class LoginView {

    private final Scene scene;

    public LoginView(Stage stage) {

        Label logo = new Label("🚗");
        logo.setStyle("-fx-font-size: 50px;");

        Label titulo = new Label("BIGU");
        titulo.setStyle("-fx-font-size: 30px; -fx-font-weight: bold; -fx-text-fill: #0B7D32;");

        Label subtitulo = new Label("RURAL");
        subtitulo.setStyle("-fx-font-size: 22px; -fx-font-weight: bold; -fx-text-fill: #0B7D32;");

        Label frase = new Label("Compartilhe caminhos,\nmultiplique conexões.");
        frase.setStyle("-fx-text-fill: #555555;");
        frase.setAlignment(Pos.CENTER);

        TextField emailField = new TextField();
        emailField.setPromptText("E-mail institucional");

        PasswordField senhaField = new PasswordField();
        senhaField.setPromptText("Senha");

        Button entrarButton = new Button("Entrar");
        entrarButton.setMaxWidth(Double.MAX_VALUE);
        entrarButton.setStyle("-fx-background-color: #007A33; -fx-text-fill: white; -fx-font-weight: bold;");

        Hyperlink recuperarSenha = new Hyperlink("Esqueci minha senha");
        Hyperlink cadastroLink = new Hyperlink("Cadastre-se");

        Label mensagem = new Label();

        entrarButton.setOnAction(e -> {
            String email = emailField.getText();
            String senha = senhaField.getText();

            if (email.isEmpty() || senha.isEmpty()) {
                mensagem.setText("Preencha todos os campos.");
                mensagem.setStyle("-fx-text-fill: red;");
                return;
            }

            if (!email.endsWith("@ufrpe.br")) {
                mensagem.setText("Use um e-mail @ufrpe.br");
                mensagem.setStyle("-fx-text-fill: red;");
                return;
            }

            mensagem.setText("Login realizado com sucesso.");
            mensagem.setStyle("-fx-text-fill: green;");
        });

        cadastroLink.setOnAction(e -> {
            CadastroView cadastroView = new CadastroView(stage);
            stage.setScene(cadastroView.getScene());
        });

        VBox layout = new VBox(12);
        layout.setPadding(new Insets(30));
        layout.setAlignment(Pos.CENTER);
        layout.setStyle("-fx-background-color: white;");

        layout.getChildren().addAll(
                logo,
                titulo,
                subtitulo,
                frase,
                emailField,
                senhaField,
                recuperarSenha,
                entrarButton,
                new Label("Não tem uma conta?"),
                cadastroLink,
                mensagem
        );

        scene = new Scene(layout, 390, 620);
    }

    public Scene getScene() {
        return scene;
    }
}
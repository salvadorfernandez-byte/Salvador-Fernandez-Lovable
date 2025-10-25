import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, Question } from "@/data/quizData";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowFeedback(true);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnswers(Array(quizQuestions.length).fill(null));
    setQuizCompleted(false);
  };

  const getScorePercentage = () => {
    return Math.round((score / quizQuestions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "Excel·lent! Domines el tema! 🎉";
    if (percentage >= 75) return "Molt bé! Bon coneixement! 👏";
    if (percentage >= 60) return "Aprovat! Continua estudiant! 📚";
    return "Has de repassar més el material 💪";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/30">
        <Card className="w-full max-w-2xl p-8 shadow-lg">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Trophy className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground">Test Completat!</h2>
            
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary">{score}/{quizQuestions.length}</p>
              <p className="text-xl text-muted-foreground">
                Puntuació: {getScorePercentage()}%
              </p>
              <p className="text-lg font-semibold text-foreground">{getScoreMessage()}</p>
            </div>

            <div className="grid grid-cols-5 gap-2 pt-4">
              {answers.map((answer, index) => {
                const isCorrect = answer === quizQuestions[index].correctAnswer;
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold ${
                      isCorrect
                        ? "bg-success text-success-foreground"
                        : "bg-destructive text-destructive-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>

            <Button
              onClick={handleRestart}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Tornar a fer el test
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/30">
      <div className="w-full max-w-3xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Test de Fonaments de Programació
          </h1>
          <p className="text-muted-foreground">Pregunta {currentQuestion + 1} de {quizQuestions.length}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progrés: {Math.round(progress)}%</span>
            <span>Encerts: {score}/{currentQuestion + (showFeedback ? 1 : 0)}</span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-lg">
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-secondary to-accent text-secondary-foreground text-sm font-semibold">
              {question.category}
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-foreground leading-relaxed">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                      showCorrect
                        ? "border-success bg-success/10 shadow-md"
                        : showIncorrect
                        ? "border-destructive bg-destructive/10 shadow-md"
                        : isSelected
                        ? "border-primary bg-primary/5 shadow-md scale-[1.02]"
                        : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
                    } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-semibold ${
                          showCorrect
                            ? "bg-success text-success-foreground"
                            : showIncorrect
                            ? "bg-destructive text-destructive-foreground"
                            : isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className={`flex-1 pt-1 ${showFeedback ? "font-medium" : ""}`}>
                        {option}
                      </span>
                      {showCorrect && (
                        <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      )}
                      {showIncorrect && (
                        <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div
                className={`p-4 rounded-xl border-2 ${
                  selectedAnswer === question.correctAnswer
                    ? "border-success bg-success/10"
                    : "border-destructive bg-destructive/10"
                }`}
              >
                <p className="font-semibold mb-2 flex items-center gap-2">
                  {selectedAnswer === question.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      <span className="text-success">Correcte!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-destructive" />
                      <span className="text-destructive">Incorrecte</span>
                    </>
                  )}
                </p>
                <p className="text-sm text-foreground/80">{question.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              {!showFeedback ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Comprovar resposta
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  {currentQuestion < quizQuestions.length - 1
                    ? "Següent pregunta"
                    : "Veure resultats"}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

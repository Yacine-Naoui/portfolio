# Rebuild the CV and copy it to where the site serves it.
#   make        -> resume/cv.pdf and static/resume.pdf
#   make clean  -> remove LaTeX build files
.PHONY: all clean
all: cv.pdf
	cp cv.pdf ../static/resume.pdf
cv.pdf: cv.tex
	latexmk -pdf -interaction=nonstopmode cv.tex
clean:
	latexmk -C cv.tex
